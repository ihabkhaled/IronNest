# 12 — Coverage Plan

## Touched Logic

- compiler-version assertion script;
- knowledge routing map/resolution;
- any new test helpers for gate contract validation.

## Thresholds

Keep repository floors unchanged: 95% statements/functions/lines and 90%
measured branches for documented transform artifacts. Every real new branch in
compiler/routing logic must be covered.

## Critical Scenarios

- exact compiler match passes;
- mismatch and malformed output fail with actionable errors;
- toolchain terms select the curated pack;
- unrelated terms do not select it accidentally;
- generated manifests are current.

## Evidence

`npm run test:coverage` plus focused tool tests and the per-file report.

## Waivers

None planned or approved.
