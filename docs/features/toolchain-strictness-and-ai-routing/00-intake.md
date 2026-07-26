# 00 — Intake

- Request ID: `REQ-2026-PLATFORM-0003`
- Title: Toolchain strictness and AI routing refresh
- Type: dependency/toolchain maintenance, quality-gate hardening, documentation
- Source: repository owner
- Owners: repository owner (business/release), Codex (technical delivery)
- Severity: `SEV-4`
- Urgency: `Planned`
- Affected domains: build, lint, Git hooks, CI, generated AI knowledge
- Delivery track: standard
- Critical-risk flags: compiler ownership, supply-chain validation, merge-gate parity

## Scope

Keep the supported TypeScript 7/TypeScript 6 side-by-side layout, make the
production compiler executable unambiguous, enforce zero ESLint warnings,
centralize local/CI gate commands, and add a concise curated context route for
future toolchain upgrades.

## Initial Constraints

- No backend runtime or API behavior change.
- No UI work; IronNest is a backend boilerplate.
- No force/legacy-peer dependency resolution or hand-edited lock metadata.
- No commit, push, release, or branch-protection mutation in this delivery.

## Exit Decision

Accepted for standard-track refinement by the repository owner through the
request. Registry metadata access is an open validation constraint.
