# Licensing Check

Every sensor asset passes this check before publish. No asset ships with a missing or unclear license field.

---

## The Seven-Question Check

Before any asset moves from `draft` to `published` in the manifest, answer all seven:

### 1. Where did this asset come from?

Name the specific source: a named provider, a specific dataset, a specific Quatro customer engagement. "Somewhere on the internet" is not a source.

### 2. What is the license?

Pick one from the controlled vocabulary in `data-sources.md`:
- `public-domain`
- `copernicus`
- `cc-by` (note the version: 2.0, 3.0, 4.0)
- `cc0`
- `quatro-owned`
- `quatro-customer-<customer>`
- `maxar-open-data`
- `commercial-<vendor>` (include contract ID)

If the license is unclear or missing, the asset does not ship.

### 3. What attribution is required?

- Copernicus: "Contains modified Copernicus Sentinel data [year]."
- Maxar Open Data: "Maxar Open Data" with link.
- USGS: courtesy attribution, not required.
- Quatro customer: per MSA — some customers require named attribution, some require no attribution, some require anonymization.
- Haeckel and pre-1930: courtesy attribution only.

Attribution goes in the manifest `attribution` field and in the site's `/credits` page.

### 4. Does it contain PII or sensitive content?

Flag any asset that shows:
- Identifiable persons (faces, name badges, operator screens with names).
- Specific vehicle license plates or vessel IMO numbers.
- Specific geolocations that could compromise customer operations.
- Content that could be classified or export-controlled.
- Content where customer data is inferable (e.g., SCADA screens with values).

If any of these apply, either:
- Redact before publish (blur, crop, overlay).
- Anonymize (change site name in caption, crop identifiable elements).
- Do not use.

### 5. Is there a customer consent record?

For any asset captured at a Quatro customer site (LIDAR scan, RF waterfall from a ground station, splat of a control room):
- Reference the customer engagement where consent was captured.
- Named consent for publication, not just consent to capture.
- Some customers require review of the specific asset before publish.

Log the consent reference in the manifest `consent_reference` field:

```json
"consent_reference": "MSA-PETRO-2025-001 Section 7.3, consent confirmed by Esteban 2026-04-10"
```

No consent reference and no public-domain source = the asset does not ship.

### 6. Is it export-controlled?

RF captures, SAR imagery of sensitive sites, high-resolution imagery of military or critical infrastructure may fall under EAR or ITAR. Check:
- Was the capture of a known military facility? Likely controlled.
- Is it high-resolution (sub-meter) imagery of a US DOD or intelligence facility? Likely controlled.
- Is it RF capture in a band reserved for military use? Likely controlled.

If any uncertainty, route to counsel before publish. Default to not shipping until cleared.

### 7. Does it comply with the source's terms of service?

Some sources (Planet Labs, Maxar Commercial) have specific restrictions on:
- Use in marketing materials.
- Use in published case studies.
- Use for training ML models.
- Redistribution.

Read the specific terms for the dataset. Many commercial datasets allow editorial use but forbid resale. Most free datasets allow editorial use with attribution.

---

## Quick Reference Table

| Source | License | OK for web editorial? | OK for paid marketing? | Attribution |
|---|---|---|---|---|
| USGS 3DEP | Public domain | Yes | Yes | Courtesy |
| Copernicus Sentinel | Copernicus | Yes | Yes | Required |
| Maxar Open Data | Permissive | Yes | Check terms | Required |
| Planet Labs | Commercial | Per contract | Per contract | Required |
| Quatro customer capture | Per MSA | Per MSA | Per MSA | Per MSA |
| HackRF / self-capture | Quatro-owned | Yes | Yes | None |
| Luma AI personal capture | User-owned | Yes | Yes | None (Luma credit optional) |
| Haeckel / pre-1930 art | Public domain | Yes | Yes | Courtesy |
| NASA | Public domain | Yes | Yes | Courtesy |
| Bell Labs | Check per image | Usually yes | Verify | Required |
| Pinterest / Google Images | Unknown | **No** | **No** | — |

---

## Red Flags

Stop before shipping if any of these appear:

- The source is a web search result with no clear provenance.
- The asset has been on the internet for years and you cannot find the original creator.
- The asset is dated after 2000 and has no license notice.
- The caption references a specific customer, location, or operation that has not been cleared.
- The asset is a screenshot of a paid service's UI (Planet Explorer, commercial SAR tools) — that is not the same as licensing the underlying imagery.
- The asset shows something a reasonable operator or partner would want kept private.

When in doubt, do not ship. The cost of pulling a contested asset after publish is higher than the cost of using a public-domain substitute.

---

## Workflow Gate

The manifest enforces this check. An entry with:
- `license: null` OR
- `status: published` AND `license: null` OR
- `consent_reference: null` for any entry with `license: quatro-customer-*`

should fail the build or a preflight audit. Make the check mechanical so the human does not have to remember.

Suggested CI check:

```bash
#!/usr/bin/env bash
jq '.[] | select(.status == "published") | select(.license == null)' \
  manifests/sensor-assets.json > unlicensed.json

if [ -s unlicensed.json ]; then
  echo "Published assets with no license:"
  cat unlicensed.json
  exit 1
fi
```

Add to the build pipeline. Ship only when the check returns clean.
