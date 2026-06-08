# Ticket Protocol — the Cowork ↔ Claude Code SDLC loop

One loop, two roles, one ledger. **Cowork** (planning, audits, handoff authoring)
seeds tickets. **Claude Code** (implementation) burns them down. Both operate on
the same repo folder, so the ledger is a file in the repo — not memory either
side can lose.

The active ledger is **`BACKLOG.md`** at the repo root.

> Replace the example commands below (`pnpm …`) with this project's package
> manager and scripts. The protocol is the same everywhere; the commands adapt.

---

## 1. The ticket schema

Every ticket is one line in `BACKLOG.md`:

```
- [ ] `ID` (size) — title — blockedBy: X,Y — spec: DOC §sec — verify: `cmd`
```

- **`ID`** — stable, namespaced (`AUTH-3`, `SHELL-1`). Never reused.
- **checkbox** — `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked.
- **size** — `S` (<½ day) · `M` (½–1 day) · `L` (multi-session; split if you can).
- **title** — one imperative line. The *what*, not the *how*.
- **blockedBy** — comma list of IDs that must be `[x]` first, or `—`.
- **spec** — the doc + section that holds the full spec. **The ledger never
  re-specs; it points.**
- **verify** — the command(s) that prove the ticket done (see §4).

Done flips the checkbox and replaces `verify:` with `done:`:

```
- [x] `ID` (size) — title — done: <sha> — spec: DOC §sec
```

The `<sha>` is the commit that closed it. **No SHA, not done.**

---

## 2. Who does what

**Cowork (seeds):** after writing or updating a handoff/audit, append its tickets
to `BACKLOG.md` in dependency order, each pointing back to the section that specs
it. Cowork never marks a ticket done.

**Claude Code (burns down):** runs the §3 lifecycle, updates the ledger, never
invents scope beyond the cited spec section. If the spec is unclear or the work
exceeds the ticket, it stops and flags rather than sprawling.

The planner and the builder never have to remember state, because the state is
the file.

---

## 3. Session lifecycle (what `/next-ticket` runs)

0. **Clean-tree precondition.** `git status --porcelain` before claiming a
   ticket. If the tree carries uncommitted changes that aren't the in-flight
   `[~]` ticket you're resuming, **stop and report** — never start new work on a
   dirty tree (that's how drift accumulates). Commit or stash first.
1. **Read** `BACKLOG.md`. Pick the **first `[ ]` whose `blockedBy` are all
   `[x]`**. None unblocked → report blockers and stop.
2. **Claim** it: flip to `[~]`. Restate its acceptance from the cited spec
   section before coding.
3. **Implement** — tight scope. Hit a scope/design/product fork the spec doesn't
   settle → invoke the `planner` subagent (§7), don't guess or sprawl.
4. **Verify** — run the §4 gate. Red → stay `[~]` + a note (or `[!]` + a blocker
   ticket). Never mark done on red.
5. **Commit** referencing the ID. One ticket per commit/PR. **Stage explicitly**
   — `git add <the files this ticket touched>`, never `git add -A` /
   `commit -am` — so the commit is exactly this ticket and never sweeps in
   unrelated work. Commit only after the §4 gate is green; never auto-push.
6. **Close** — flip to `[x]`, replace `verify:` with `done: <sha>`.
7. **Next** — repeat until the user stops or the queue is empty.

---

## 4. The verify gate

Done only when **all** pass:

- The ticket's own `verify:` (its acceptance — a test, a script, a curl
  assertion, or a named manual check).
- Type-check — green. _(e.g. `pnpm type-check` / `tsc --noEmit` / `mypy` / …)_
- Lint — clean on touched files. _(e.g. `pnpm lint` / `eslint` / `ruff` / …)_

The **full test suite is NOT the per-ticket gate** (too slow to run every
ticket). It runs at **sprint / handoff boundaries** and for any ticket that
touches a shared component, contract, or schema (that ticket names the full
suite as its `verify`).

Manual / visual / WebGL acceptance can't run in CI — those tickets name the
manual check as `verify` and the agent reports "needs human eyes: <check>",
never silently auto-passes.

---

## 5. Conventions

- **One ticket per commit.** The SHA in the ledger is the audit trail.
- **Blocked > done-wrong.** Can't build as specced → `[!]` + a note, pick the
  next unblocked one.
- **Append-mostly.** Closed tickets keep their SHA as history; archive a family
  to a `## Done` section when it clutters the active queue.
- **Cowork re-seeds, never marks done. Claude Code marks done, never re-specs.**

---

## 6. Wiring (add to the repo's CLAUDE.md)

```md
## Session workflow

The active queue is `BACKLOG.md` (repo root), governed by
`docs/TICKET_PROTOCOL.md`. Run `/next-ticket` to work the next unblocked ticket.
No SHA → not done. One ticket per commit. The ledger points at the spec; it never
re-specs.
```

---

## 7. Decisions — resolve from authorities, escalate genuine forks

When a ticket hits a scope/design/product fork, the `planner` subagent
(`.claude/agents/planner.md`) walks `docs/DECISION_AUTHORITIES.md` in precedence
(invariants → recorded decisions → product/business goals → design system →
brand voice → external best practice) and stops at the first tier that answers
it. **Most forks are already settled in a recorded decision — look first.**

Internal tiers silent → the planner researches best practice and writes a
`DECISION-NEEDED` note beneath the ticket, flips it to `[!]`, and stops:

```
  > DECISION-NEEDED (<date>): <the fork in one line>
  >   Authorities consulted: <what each tier said, or that it was silent>
  >   Option A — <name>: <consequence> · honors <authority>
  >   Option B — <name>: <consequence> · honors <authority>
  >   Best practice: <citation> — informs, does not decide
  >   Recommendation: <A/B> because <one line>
```

The human decides, records it into the authorities, and re-seeds. **Research
informs, never overrides** — best practice produces options, never an autonomous
change. The agent frames a decision; only the human makes it.

---

## 8. Why this exists

Across sessions the failure was always the same: state drift, reference loss,
and a missing verification gate. This protocol fixes each with one mechanism —
the ledger, the `spec:` pointer, the `done: <sha>` rule. The discipline is the
product; if a session skips the gate, the loop is back to where it started.
