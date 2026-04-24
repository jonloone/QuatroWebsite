#!/usr/bin/env python3
"""
fetch-seed-assets.py — Download curated seed assets for the Quatro site.

Pulls public-domain illustration and archival imagery from four stable sources
and lands them at the right paths in the repo with correct manifest entries.
Run once after installing the rehaul to populate the illustration lane.

All sources are free and unauthenticated. Assets are verifiably public domain
or permissively licensed. For sensor imagery (LIDAR, SAR, earth observation),
use the authenticated fetchers once you have Earthdata and Copernicus
credentials.

Usage:
  python scripts/fetch-seed-assets.py [--category CATEGORY] [--dry-run] [--limit N]

Categories:
  haeckel       — Ernst Haeckel biomimetic plates (Wikimedia Commons)
  whole-earth   — Whole Earth Catalog scans (Internet Archive)
  nasa          — NASA archival imagery (NASA Images API)
  loc-fsa       — Library of Congress FSA-OWI industrial photography
  all           — Run every category (default)

Flags:
  --dry-run     — Print what would be fetched without downloading.
  --limit N     — Max assets per category (default: no limit).
  --force       — Re-download existing files (default: skip).

Run from the Quatro repo root. Uses only Python stdlib — no pip installs.
"""

from __future__ import annotations

import argparse
import http.client
import json
import sys
import time
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = REPO_ROOT / "scripts" / "seed-asset-catalog.json"
MANIFESTS_DIR = REPO_ROOT / "manifests"

USER_AGENT = (
    "QuatroSeedFetcher/1.0 "
    "(Quatro website asset pipeline; editorial use of public-domain material)"
)


def log(msg: str, *, level: str = "info") -> None:
    """Print a timestamped log line."""
    prefix = {"info": "  ", "ok": "OK", "skip": "--", "warn": "!!", "err": "EE"}
    print(f"[{prefix.get(level, '  ')}] {msg}", file=sys.stderr)


def http_get(url: str, timeout: int = 60, retries: int = 3, backoff: float = 2.0) -> bytes:
    """Fetch raw bytes from a URL with a friendly user agent.

    Retries on IncompleteRead (server-side truncation — LoC is known for this)
    and on transient HTTP 5xx errors. Exponential backoff.
    """
    last_exc: Exception | None = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(req, timeout=timeout) as response:
                return response.read()
        except http.client.IncompleteRead as exc:
            last_exc = exc
            if attempt + 1 < retries:
                time.sleep(backoff * (attempt + 1))
        except urllib.error.HTTPError as exc:
            last_exc = exc
            # Retry 5xx / 429 with backoff; fail fast on 4xx other than 429.
            if exc.code == 429 or exc.code >= 500:
                if attempt + 1 < retries:
                    time.sleep(backoff * (attempt + 1) * 2)
                    continue
            raise
        except urllib.error.URLError as exc:
            last_exc = exc
            if attempt + 1 < retries:
                time.sleep(backoff * (attempt + 1))
    assert last_exc is not None
    raise last_exc


def http_get_json(url: str, timeout: int = 30) -> Any:
    """Fetch JSON from a URL."""
    return json.loads(http_get(url, timeout=timeout).decode("utf-8"))


def save_file(target: Path, data: bytes) -> int:
    """Write bytes to target and return size in bytes."""
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    return len(data)


def load_manifest(path: Path) -> list[dict[str, Any]]:
    """Load an existing manifest or return an empty list."""
    if path.exists() and path.stat().st_size > 2:
        return json.loads(path.read_text())
    return []


def save_manifest(path: Path, entries: list[dict[str, Any]]) -> None:
    """Write the manifest atomically."""
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp.json")
    tmp.write_text(json.dumps(entries, indent=2, sort_keys=False))
    tmp.rename(path)


def upsert_manifest(manifest_path: Path, entry: dict[str, Any]) -> None:
    """Insert or update an entry in the manifest by id."""
    entries = load_manifest(manifest_path)
    existing = next((i for i, e in enumerate(entries) if e.get("id") == entry["id"]), None)
    if existing is not None:
        entries[existing] = entry
    else:
        entries.append(entry)
    save_manifest(manifest_path, entries)


def iso_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


# ---------------------------------------------------------------------------
# Source: Wikimedia Commons (Haeckel plates)
# ---------------------------------------------------------------------------

def resolve_wikimedia_image_url(filename: str, thumb_width: int = 2560) -> str | None:
    """Use the MediaWiki imageinfo API to resolve File:<name> to a thumbnail URL.

    We request a thumbnail at `thumb_width` rather than the raw original for
    two reasons: (1) Wikimedia's thumb service lives on a different host with
    a separate rate budget, and (2) originals of Haeckel plates are typically
    4000-8000px and 10-50MB — overkill for Quatro hero use. Falls back to
    the original if the thumbnail URL is not returned.
    """
    title = f"File:{filename}"
    api = (
        "https://commons.wikimedia.org/w/api.php"
        f"?action=query&titles={urllib.parse.quote(title)}"
        "&prop=imageinfo"
        f"&iiprop=url|size|extmetadata&iiurlwidth={thumb_width}"
        "&format=json&formatversion=2"
    )
    try:
        data = http_get_json(api)
    except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
        log(f"wikimedia: failed to resolve {filename}: {exc}", level="warn")
        return None

    pages = data.get("query", {}).get("pages", [])
    if not pages or not pages[0].get("imageinfo"):
        log(f"wikimedia: no image info for {filename}", level="warn")
        return None
    info = pages[0]["imageinfo"][0]
    return info.get("thumburl") or info.get("url")


def fetch_haeckel(config: dict, args: argparse.Namespace) -> int:
    """Fetch Haeckel plates from Wikimedia Commons."""
    log(f"== haeckel_plates ({len(config['plates'])} files) ==", level="info")
    target_dir = REPO_ROOT / config["target_dir"]
    manifest_path = MANIFESTS_DIR / config["target_manifest"]
    count = 0

    for filename in config["plates"][: args.limit] if args.limit else config["plates"]:
        local_name = filename.lower().replace("_", "-")
        target = target_dir / local_name

        if target.exists() and not args.force:
            log(f"skip (exists): {local_name}", level="skip")
            continue

        url = resolve_wikimedia_image_url(filename)
        if not url:
            continue

        if args.dry_run:
            log(f"would fetch: {url} -> {target}", level="info")
            continue

        try:
            data = http_get(url, timeout=120)
            size_kb = save_file(target, data) // 1024
            log(f"fetched {local_name} ({size_kb} KB)", level="ok")
        except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
            log(f"fetch failed {filename}: {exc}", level="err")
            continue

        # Be polite to Wikimedia's infrastructure: ~1 req / 1.5s per their
        # etiquette guide for bulk fetches.
        time.sleep(1.5)

        upsert_manifest(manifest_path, {
            "id": target.stem,
            "path": "/" + str(target.relative_to(REPO_ROOT / "public")),
            "type": "illustration",
            "subtype": "haeckel-plate",
            "source": "wikimedia-commons",
            "source_filename": filename,
            "source_url": url,
            "license": config["license"],
            "attribution": config["attribution"],
            "file_size_kb": size_kb,
            "created_at": iso_now(),
            "status": "draft",
        })
        count += 1

    log(f"haeckel: {count} new assets", level="info")
    return count


# ---------------------------------------------------------------------------
# Source: Internet Archive (Whole Earth Catalog)
# ---------------------------------------------------------------------------

def fetch_whole_earth(config: dict, args: argparse.Namespace) -> int:
    """Fetch Whole Earth Catalog scans from Internet Archive."""
    log(f"== whole_earth_catalog ({len(config['items'])} items) ==", level="info")
    target_dir = REPO_ROOT / config["target_dir"]
    manifest_path = MANIFESTS_DIR / config["target_manifest"]
    count = 0
    items = config["items"][: args.limit] if args.limit else config["items"]

    for item in items:
        for filename in item["files"]:
            local_name = filename.lower().replace("_", "-")
            target = target_dir / local_name

            if target.exists() and not args.force:
                log(f"skip (exists): {local_name}", level="skip")
                continue

            url = f"https://archive.org/download/{item['item_id']}/{filename}"

            if args.dry_run:
                log(f"would fetch: {url} -> {target}", level="info")
                continue

            try:
                data = http_get(url, timeout=300)
                size_kb = save_file(target, data) // 1024
                log(f"fetched {local_name} ({size_kb} KB)", level="ok")
            except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
                log(f"fetch failed {filename}: {exc}", level="err")
                continue

            upsert_manifest(manifest_path, {
                "id": target.stem,
                "path": "/" + str(target.relative_to(REPO_ROOT / "public")),
                "type": "illustration",
                "subtype": "archival-publication",
                "source": "internet-archive",
                "source_item_id": item["item_id"],
                "source_url": url,
                "license": config["license"],
                "attribution": config["attribution"],
                "caption": item.get("caption"),
                "file_size_kb": size_kb,
                "created_at": iso_now(),
                "status": "draft",
            })
            count += 1

    log(f"whole-earth: {count} new assets", level="info")
    return count


# ---------------------------------------------------------------------------
# Source: NASA Images API
# ---------------------------------------------------------------------------

def fetch_nasa(config: dict, args: argparse.Namespace) -> int:
    """Fetch NASA archival images via the images-api.nasa.gov search API."""
    log(f"== nasa_archival ({len(config['queries'])} queries) ==", level="info")
    target_dir = REPO_ROOT / config["target_dir"]
    manifest_path = MANIFESTS_DIR / config["target_manifest"]
    count = 0
    queries = config["queries"][: args.limit] if args.limit else config["queries"]

    for query_cfg in queries:
        search = (
            "https://images-api.nasa.gov/search"
            f"?q={urllib.parse.quote(query_cfg['query'])}&media_type=image"
        )
        try:
            data = http_get_json(search)
        except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
            log(f"nasa search failed for '{query_cfg['query']}': {exc}", level="err")
            continue

        items = data.get("collection", {}).get("items", [])[: query_cfg["max_results"]]
        for i, item in enumerate(items):
            nasa_id = item["data"][0].get("nasa_id", f"unknown-{i}")
            title = item["data"][0].get("title", "")
            date_created = item["data"][0].get("date_created", "")

            # The asset collection URL lists every size variant
            asset_url = item.get("href")
            if not asset_url:
                continue

            try:
                variants = http_get_json(asset_url)
            except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead):
                continue

            # Pick the largest original image (ends in ~orig.jpg or ~large.jpg)
            original = next(
                (v for v in variants if v.endswith(("~orig.jpg", "~large.jpg", "~orig.png"))),
                None,
            )
            if not original:
                continue

            local_name = f"{query_cfg['prefix']}-{i+1:02d}.jpg"
            target = target_dir / local_name

            if target.exists() and not args.force:
                log(f"skip (exists): {local_name}", level="skip")
                continue

            if args.dry_run:
                log(f"would fetch: {original} -> {target}", level="info")
                continue

            try:
                data = http_get(original, timeout=120)
                size_kb = save_file(target, data) // 1024
                log(f"fetched {local_name} ({size_kb} KB)", level="ok")
            except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
                log(f"fetch failed {nasa_id}: {exc}", level="err")
                continue

            upsert_manifest(manifest_path, {
                "id": target.stem,
                "path": "/" + str(target.relative_to(REPO_ROOT / "public")),
                "type": "illustration",
                "subtype": "archival-photography",
                "source": "nasa-images",
                "source_nasa_id": nasa_id,
                "source_url": original,
                "title": title,
                "date_created": date_created,
                "license": config["license"],
                "attribution": config["attribution"],
                "file_size_kb": size_kb,
                "created_at": iso_now(),
                "status": "draft",
            })
            count += 1

    log(f"nasa: {count} new assets", level="info")
    return count


# ---------------------------------------------------------------------------
# Source: Library of Congress (FSA-OWI)
# ---------------------------------------------------------------------------

def fetch_loc(config: dict, args: argparse.Namespace) -> int:
    """Fetch FSA-OWI archival photography via the Library of Congress JSON API."""
    log(f"== loc_fsa_owi ({len(config['queries'])} queries) ==", level="info")
    target_dir = REPO_ROOT / config["target_dir"]
    manifest_path = MANIFESTS_DIR / config["target_manifest"]
    count = 0
    queries = config["queries"][: args.limit] if args.limit else config["queries"]

    for query_cfg in queries:
        # Restrict to FSA-OWI B&W negatives collection for historical industrial.
        search = (
            "https://www.loc.gov/collections/fsa-owi-black-and-white-negatives/"
            f"?q={urllib.parse.quote(query_cfg['query'])}&fo=json&c=25"
        )
        try:
            data = http_get_json(search)
        except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
            log(f"loc search failed for '{query_cfg['query']}': {exc}", level="err")
            continue

        results = data.get("results", [])[: query_cfg["max_results"]]
        for i, result in enumerate(results):
            item_id = result.get("id", "").split("/")[-2] if result.get("id") else f"unknown-{i}"
            # Each result has an "image_url" list with various resolutions.
            # Pick the largest available (usually the last or one with "#tif" or "size=full").
            image_urls = result.get("image_url", [])
            if not image_urls:
                continue

            # Prefer the full-resolution version, typically the last entry or one with "full"
            url = image_urls[-1]

            local_name = f"{query_cfg['prefix']}-{i+1:02d}.jpg"
            target = target_dir / local_name

            if target.exists() and not args.force:
                log(f"skip (exists): {local_name}", level="skip")
                continue

            if args.dry_run:
                log(f"would fetch: {url} -> {target}", level="info")
                continue

            try:
                data_bytes = http_get(url, timeout=120)
                size_kb = save_file(target, data_bytes) // 1024
                log(f"fetched {local_name} ({size_kb} KB)", level="ok")
            except (urllib.error.URLError, urllib.error.HTTPError, http.client.IncompleteRead) as exc:
                log(f"fetch failed {item_id}: {exc}", level="err")
                continue

            upsert_manifest(manifest_path, {
                "id": target.stem,
                "path": "/" + str(target.relative_to(REPO_ROOT / "public")),
                "type": "illustration",
                "subtype": "archival-photography-fsa-owi",
                "source": "library-of-congress",
                "source_item_id": item_id,
                "source_url": url,
                "title": result.get("title", ""),
                "date_created": result.get("date", ""),
                "license": config["license"],
                "attribution": config["attribution"],
                "file_size_kb": size_kb,
                "created_at": iso_now(),
                "status": "draft",
            })
            count += 1

    log(f"loc-fsa: {count} new assets", level="info")
    return count


# ---------------------------------------------------------------------------
# Orchestrator
# ---------------------------------------------------------------------------

FETCHERS = {
    "haeckel": ("haeckel_plates", fetch_haeckel),
    "whole-earth": ("whole_earth_catalog", fetch_whole_earth),
    "nasa": ("nasa_archival", fetch_nasa),
    "loc-fsa": ("loc_fsa_owi", fetch_loc),
}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    parser.add_argument("--category", choices=list(FETCHERS.keys()) + ["all"], default="all")
    parser.add_argument("--limit", type=int, default=0, help="Max assets per category")
    parser.add_argument("--dry-run", action="store_true", help="Don't download anything")
    parser.add_argument("--force", action="store_true", help="Re-download existing files")
    args = parser.parse_args()

    # Convert limit=0 to None for "no limit"
    if args.limit == 0:
        args.limit = None

    if not CATALOG_PATH.exists():
        print(f"ERROR: catalog not found at {CATALOG_PATH}", file=sys.stderr)
        return 1

    catalog = json.loads(CATALOG_PATH.read_text())

    total = 0
    categories = list(FETCHERS.keys()) if args.category == "all" else [args.category]

    for cat in categories:
        key, fn = FETCHERS[cat]
        if key not in catalog:
            log(f"skip {cat} (not in catalog)", level="skip")
            continue
        total += fn(catalog[key], args)

    log(f"== DONE. {total} new assets fetched. ==", level="info")
    if not args.dry_run and total > 0:
        log("Next: git add public/images/illustration manifests/ && git commit", level="info")

    return 0


if __name__ == "__main__":
    sys.exit(main())
