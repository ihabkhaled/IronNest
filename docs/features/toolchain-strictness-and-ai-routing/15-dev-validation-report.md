# 15 — Developer Validation Report

## Summary

The toolchain and dependency changes are functionally validated. Application runtime behavior did not change.

| Area                | Result | Evidence                                                                     |
| ------------------- | ------ | ---------------------------------------------------------------------------- |
| Focused regressions | Pass   | 4 files, 29 tests                                                            |
| Formatting + lint   | Pass   | Prettier clean; ESLint 10.8.0 exits with zero warnings                       |
| Type checks         | Pass   | Native TypeScript 7.0.2 verified before project typecheck                    |
| Unit tests          | Pass   | 50 files, 377 tests                                                          |
| E2E tests           | Pass   | `test/app.e2e-spec.ts`                                                       |
| Coverage            | Pass   | 51 files, 392 tests; 99.6% statements/lines, 94.93% branches, 100% functions |
| Build               | Pass   | Native TypeScript 7.0.2 verified; build exit 0                               |
| Knowledge gate      | Pass   | Fresh manifests, no contradictions, 13/13 golden routes                      |
| npm audit           | Pass   | 0 vulnerabilities                                                            |
| Trivy security scan | Pass   | 0 HIGH, 0 CRITICAL                                                           |

## Validation Log

1. Compatible runtime and development dependencies were updated, including ESLint 10.8.0.
2. Patched transitive releases are selected for `brace-expansion`, `fast-uri`, `find-my-way`, `postcss`, the Swagger-owned `js-yaml`, and Nest's optional `@fastify/static` peer; audit and Trivy report zero findings.
3. The fail-closed postinstall compatibility script verifies `brace-expansion` 5.0.8 and restores the CJS/ESM exports required by legacy consumers.
4. `npm run validate` passed end to end.
5. The resolver invalid-ref regression intentionally writes Git diagnostics to stderr; its test passes.

## Limitations

- Nest 11.1.28 still declares the optional `@fastify/static` peer as `^8 || ^9`; the root security override resolves that transitive optional peer to patched 10.1.2. Keep the override until Nest publishes the widened range, and retain E2E coverage as compatibility proof.
- Local Node 24.14.1 and npm 10.7.0 are below the declared Node 24.18 and npm 11.16 minimums. A clean pinned-runner install remains required before release.
- No database, queue, external-integration, or API behavior changed.

## Exit

Developer validation passes. Release validation awaits pinned-runner and GitHub required-check evidence.
