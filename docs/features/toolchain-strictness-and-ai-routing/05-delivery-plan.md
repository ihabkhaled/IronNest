# 05 — Delivery Plan

## Workstreams And Sequence

1. Record baseline compiler, gates, hooks, workflows, and resolver output.
2. Add compiler assertion tests, then implementation.
3. Add canonical gate scripts and migrate hooks/workflows to them.
4. Add the toolchain-upgrade skill, routing pack, benchmark task, and tests.
5. Update toolchain, quality-gate, GitHub, memory, and support documentation.
6. Rebuild generated AI artifacts and run the complete validation set.

## Milestones

- M1: phases 00–13 approved for implementation.
- M2: compiler/gate behavior implemented with tests.
- M3: AI routing implemented with tests and benchmark evidence.
- M4: all gates and documentation current.

## Dependencies And Blockers

- Installed dependency graph is available.
- Clean registry comparison is unavailable due denied external metadata access.
- Local Node/npm do not match the pinned engine baseline.

## Approvals

Technical/repository-owner review before commit or release. No external client
approval is required for implementation-only local work.

## Rollout

Ship as one reviewable toolchain-maintenance change; consumers receive it on
their next clone/update.
