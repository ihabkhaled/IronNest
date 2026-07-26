# 19 — Security Review

Security posture improved through error-only recommended security lint rules, canonical gate scripts, and patched transitive dependency resolution.

- No runtime routes, auth policies, secrets, or data flows changed.
- ESLint resolves no active production rule at warning severity.
- Trivy 0.71.0 uses a database updated 2026-07-26.
- `npm run security:scan` now reports 1 HIGH and 0 CRITICAL findings, reduced from 9 HIGH.
- Nest's optional `@fastify/static` peer is resolved to patched 10.1.2 through an exact security override. `npm audit`, Trivy, and the application E2E suite validate the resulting tree.
- Exact overrides remove the former `brace-expansion`, `fast-uri`, `find-my-way`, `postcss`, and `js-yaml` findings. The brace export adapter fails installation if the expected version or source shape changes.
- Registry-backed `npm audit` was not authorized because it uploads dependency-graph metadata.

Decision: implementation security review passes; the release security gate remains blocked by the one upstream compatibility gap. Do not suppress the finding, hand-edit the lockfile, or force the unsupported peer.
