# Skill: Upgrade The Toolchain Safely

## Intent

Upgrade runtime, compiler, framework, lint, test, and automation packages
without manufacturing compatibility or letting local, hook, and CI gates drift.

## Required Read

1. Current request artifacts `00`–`13`.
2. [Stack and toolchain](../context/stack-and-toolchain.md).
3. [ESLint and TypeScript rules](../rules/13-eslint-and-typescript.md).
4. [Package compatibility pitfalls](../memory/known-pitfalls.md#i-quality-gate--build-traps).
5. Package manifest, generated lockfile, hooks, and every workflow in scope.

## Procedure

1. Record runtime/package-manager/compiler versions and the clean gate baseline.
2. Query registry/vendor metadata only with approved network access; distinguish
   latest from latest compatible and read migration/peer requirements for majors.
3. Update the manifest through the package manager. Never use `--force`,
   `--legacy-peer-deps`, a legacy-peer `.npmrc`, or hand-edited lock metadata.
4. Preserve official compatibility packages deliberately. For IronNest,
   `@typescript/native` owns the TypeScript 7 CLI while the package named
   `typescript` supplies only the TypeScript 6 compiler API for tools.
5. Prove compiler ownership with `npm run compiler:check`; never infer it from a
   package name or a passing build.
6. Keep one public `gate:*` command per concern. Hooks and CI call those commands,
   not duplicated command bodies.
7. Make lint warnings blocking and retain every strict compiler, lint, coverage,
   security, and architecture rule.
8. Run a clean install on the pinned Node/npm baseline, then every gate. Record
   unavailable environment or registry checks as limitations, never waivers.
9. Update toolchain context, tests, generated knowledge, runbooks, support notes,
   and request validation evidence in the same change.

## Validation

```bash
npm run compiler:check
npm run gate:lint
npm run gate:typecheck
npm run gate:unit
npm run gate:e2e
npm run gate:coverage
npm run gate:build
npm run gate:knowledge
npm run gate:security
```

## Completion Rules

- The lockfile is package-manager generated.
- TypeScript 7 is the proven build/typecheck compiler.
- The compatibility compiler has a named owner and does not own build output.
- Local hooks and GitHub workflows call the same public gate scripts.
- Zero errors, zero warnings, zero skipped required checks.
- Registry, runtime, security-tool, or remote-branch limitations are explicit.
