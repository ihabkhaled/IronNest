# 11 — Test Strategy

## Requirement-To-Test Map

| Requirement                          | Validation                                         |
| ------------------------------------ | -------------------------------------------------- |
| TS7 owns build/typecheck             | compiler assertion unit/CLI test + version command |
| Wrong compiler version fails         | negative subprocess fixture/assertion              |
| Warnings block lint                  | resolved script inspection + lint execution        |
| Hooks/CI use shared gates            | workflow/hook regression assertions                |
| Toolchain task gets curated pack     | resolver unit tests + CLI smoke test               |
| Pack stays concise and authoritative | contradiction/benchmark/verify gates               |
| Application remains intact           | unit, E2E, coverage, build                         |

## Test Layers

- Unit/static: compiler assertion, resolver pack, workflow/script contracts.
- Integration: invoke public npm gate entrypoints.
- Backend E2E: existing Fastify/Supertest suite.
- Security: dependency audit; Trivy when installed/available.
- UI/migration/rollback tests: not applicable.

## Negative And Edge Cases

Wrong/malformed compiler version, unrelated task text, missing generated
manifest, warning-producing lint, and stale generated AI output.

## Environment And Data

No durable data. Tests use temporary files/processes and deterministic task
strings. Local runtime mismatch is recorded in validation evidence.

## Evidence

Command summaries in `15-dev-validation-report.md`; defects and retests in
`16-dev-bug-log.md`.
