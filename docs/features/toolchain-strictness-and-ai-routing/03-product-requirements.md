# 03 — Product Requirements

## Epic

Provide an unambiguous, strict, low-token toolchain-maintenance experience.

## User Stories

1. As an engineer, I can prove which TypeScript compiler owns build/typecheck.
2. As a contributor, I run the same named gates locally, in hooks, and in CI.
3. As a reviewer, I know that ESLint warnings are merge-blocking.
4. As an AI agent, I receive the exact toolchain rules, skill, and validation
   commands without loading unrelated security or feature guidance.

## Acceptance Criteria

- `compiler:version`, `typecheck`, and `build` call the explicit native compiler.
- `compiler:check` fails unless the native CLI is the documented TS7 version.
- `lint` and staged lint use `--max-warnings 0`.
- Public `gate:*` scripts are the canonical hook/CI entrypoints.
- The knowledge resolver recognizes toolchain/dependency/package/ESLint/CI
  upgrade language and returns the curated pack.
- Tests cover compiler assertion and context routing behavior.
- Generated `.ai` artifacts and documentation remain current.

## Scope

In scope: package scripts, a dependency-free compiler assertion, hooks,
workflows, knowledge routing/tests, concise skill/docs, generated manifests.

Out of scope: application behavior, API/schema/config changes, UI, deployment,
remote branch protection, commits, pushes.

## UX, Errors, Permissions, Analytics, Localization

- UX: command names and failure output must be direct and actionable.
- Errors: compiler assertion names expected and actual versions.
- Permissions/auth: not affected.
- Analytics/localization: not applicable; developer tooling only.

## Product Definition Of Done

All applicable static, test, coverage, build, knowledge, and security-audit
gates are green; limitations are explicit.
