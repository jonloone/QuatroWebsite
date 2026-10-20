---
description: Report ledger status — done, in-progress, next unblocked, and blockers
---

Read `BACKLOG.md` and report, without changing anything:

1. **Counts** — total tickets, `[x]` done, `[~]` in progress, `[!]` blocked, `[ ]` todo.
2. **In progress** — every `[~]` ticket and the note beneath it, if any.
3. **Next unblocked** — the first `[ ]` ticket whose `blockedBy` are all `[x]`. This is what `/next-ticket` would pick.
4. **Blocked queue** — any `[!]` ticket and any `[ ]` whose blockers are still open, with which blocker is holding it.
5. **Recent closes** — the last 5 entries under `## Done` with their SHAs.

Keep it to a tight summary. Do not edit the ledger or touch code.
