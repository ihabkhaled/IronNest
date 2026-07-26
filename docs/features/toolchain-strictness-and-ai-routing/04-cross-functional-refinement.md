# 04 — Cross-Functional Refinement

## Participants

Repository owner, technical delivery, QA/release/security responsibilities
represented by the repository baselines.

## Findings

- Engineering: preserve the official TS7 CLI + TS6 API compatibility layout.
- QA: add executable proof; do not rely on documentation alone.
- Security: never force dependency resolution or edit lock metadata.
- DevOps: share stable gate scripts between hooks and workflows.
- Documentation: update every command table that claims bare `tsc`.
- AI enablement: add a curated resolver lane and benchmark task.
- Support: document runtime mismatch and registry-validation limitations.

## Integration Points

`package.json`, `.husky`, `.github/workflows`, `tools/knowledge`, generated
`.ai`, testing docs, toolchain memory, and request artifacts.

## Decisions

- Keep pre-commit limited to staged lint plus project typecheck.
- Put slower coverage/build/knowledge verification in pre-push.
- Keep security scanning in CI/release because Trivy availability is external.

## Open Questions

Registry-current package verification is blocked in this environment; record it
without weakening package pins.

## Exit Decision

Hidden work and ownership are explicit; refinement accepted.
