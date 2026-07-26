# 07 — Technical Roadmap

## Engineering Milestones

1. Compiler assertion test and script.
2. Canonical gate scripts with hook/workflow migration.
3. Resolver pack, benchmark task, and routing tests.
4. Documentation and generated knowledge refresh.
5. Full validation and defect loop.

## Branch And Merge Strategy

One request-scoped branch/change; no commit or push from this delegated track.
The parent agent coordinates final packaging.

## Schema And Data Evolution

Not applicable; no persistence or contract change.

## Compatibility

The runtime application surface remains unchanged. TypeScript 6 remains the
compiler-API compatibility package; TypeScript 7 remains the sole build CLI.

## Rollout Sequence

Update scripts first, consumers second (hooks/workflows/docs), generated
artifacts last.

## Rollback Sequence

Revert generated artifacts, docs/routing, hooks/workflows, gate scripts, and
compiler assertion as one coherent reverse slice. Package layout remains intact.
