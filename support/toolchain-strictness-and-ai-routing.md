# Toolchain Strictness And AI Routing Support

## Expected Behavior

- `npm run compiler:check` reports native TypeScript 7.0.2.
- `npm run gate:commit` runs staged lint and project typecheck.
- `npm run gate:push` runs coverage, build, and knowledge integrity.
- `npm run validate` runs every non-network quality gate.
- `npm install` verifies the patched `brace-expansion` version and its CJS/ESM compatibility exports.

## Triage

- Wrong compiler version: reinstall from the lockfile; do not swap the official TypeScript aliases.
- Warning or unused suppression: fix the source; warnings are blocking.
- Stale `.ai` manifests: run `npm run knowledge:build`, inspect, then rerun `gate:knowledge`.
- Missing `coverage/.tmp`: ensure only one coverage process uses the worktree.
- Engine warning: use Node `>=24.18.0 <25` and npm `>=11.16.0`; do not lower the pins.
- Brace compatibility failure: inspect the upstream export change and update the fail-closed script with tests; never weaken its version/source checks.
- `@fastify/static` override: Nest exposes this optional peer transitively, so keep the exact patched 10.1.2 override until Nest widens its peer range; audit, Trivy, and E2E must all pass before changing it.

Escalate any request to bypass hooks, security gates, compiler proof, peer compatibility, or knowledge integrity.
