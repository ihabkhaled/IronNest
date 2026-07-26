# 24 — Risk, Compliance, And Operations

| Risk                                                           | Status                     | Treatment                                                               |
| -------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------- |
| Nest has not widened its optional `@fastify/static` peer range | Controlled dependency risk | Keep the exact patched 10.1.2 override plus audit, Trivy, and E2E gates |
| Local engine versions below policy                             | Open release blocker       | Validate cleanly on the pinned runner                                   |
| Registry npm vulnerability audit pending                       | Open release blocker       | Run only with explicit metadata-disclosure authorization                |
| Other former HIGH transitive findings                          | Closed                     | Exact patched overrides plus fail-closed compatibility verification     |
| Hook/CI command drift                                          | Closed                     | Shared scripts plus contract tests                                      |
| Compiler ambiguity                                             | Closed                     | Explicit TypeScript 7 binary plus exact version proof                   |
| AI documentation staleness                                     | Closed                     | Pre-push and CI knowledge integrity gate                                |

Rollback is a source revert; there is no data migration or application runtime change.
