---
description: Pick and work the next unblocked ticket from BACKLOG.md per the protocol
---

Work the next ticket in the ledger, following `docs/TICKET_PROTOCOL.md` exactly.

0. **Clean-tree precondition.** Run `git status --porcelain`. If the tree has
   uncommitted changes that aren't part of an in-flight `[~]` ticket you're
   resuming, stop and report them — don't start new work on a dirty tree. Offer
   to commit or stash them first.

1. Read `BACKLOG.md`. Select the **first `[ ]` ticket whose every `blockedBy` ID
   is `[x]`**. If `$ARGUMENTS` names a ticket ID, work that one instead (still
   honoring its blockers — refuse if a blocker is open).
   If nothing is unblocked, list the open blockers and stop.

2. Flip the chosen ticket to `[~]` in `BACKLOG.md`. Open the doc named in its
   `spec:` field, read that section, and restate the acceptance criteria back to
   me before writing code. Do not work from the one-line title alone.

3. Implement — scope tight to what the spec section names. If you hit a scope,
   design-system, or product fork the spec doesn't settle, invoke the `planner`
   subagent (`.claude/agents/planner.md`) — it resolves the fork from the project's
   authorities (`docs/DECISION_AUTHORITIES.md`) or escalates it as a
   `DECISION-NEEDED` note and stops. Do not guess or sprawl past a fork.

4. Run the verify gate (use this project's package manager + scripts):
   - the ticket's own `verify:` command,
   - the project's type-check (must be green),
   - the project's lint (clean on touched files).
   If the ticket adds or changes customer-facing copy, also run the copy gate in
   `docs/VOICE_GATE.md` and report "voice gate: pass".
   If any fail, leave the ticket `[~]`, write one line on the blocker beneath it
   (or flip to `[!]` and add a blocker ticket), and stop. Never mark done on red.
   For a `verify:` that is a manual/visual check, run everything automatable,
   then report "needs human eyes: <check>" — do not silently pass it.

5. Commit referencing the ID, one ticket per commit:
   `feat: <ID> — <short title>`.
   Stage explicitly — `git add` only the files this ticket touched, never
   `git add -A` / `commit -am` — so the commit is exactly this ticket. Commit
   only after the verify gate is green; never auto-push.

6. Flip the ticket to `[x]` in `BACKLOG.md` and replace its `verify:` field with
   `done: <sha>` (the commit SHA from step 5). Move it under `## Done` if the
   active section is getting long.

7. Report: what changed, the SHA, gate results, and the next unblocked ticket.
   Then stop — do not auto-continue unless I say so.

Rules that are not optional: no SHA → not done; blocked is better than
done-wrong; never re-spec in the ledger; one ticket per commit.
