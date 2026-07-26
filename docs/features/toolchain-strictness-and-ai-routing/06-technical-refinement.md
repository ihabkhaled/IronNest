# 06 — Technical Refinement

## Context

`@typescript/native` aliases TypeScript 7 and supplies a CLI. The package named
`typescript` aliases TypeScript 6 solely for compiler-API consumers. npm
currently resolves bare `tsc` to TS7, but executable ownership should not be an
implicit invariant.

## Chosen Approach

- Invoke `node node_modules/@typescript/native/bin/tsc` explicitly.
- Assert `7.0.2` with a dependency-free Node script before typecheck/build.
- Add composable `gate:lint`, `gate:typecheck`, `gate:unit`, `gate:e2e`,
  `gate:coverage`, `gate:build`, `gate:knowledge`, and aggregate scripts.
- Route hooks and workflows through those scripts.
- Add one focused `upgrade-toolchain-safely` skill and a resolver pack.

## Alternatives Considered

- Keep bare `tsc`: rejected because npm bin ownership is implicit.
- Replace the compatibility package: rejected because tooling imports the
  compiler API that TS7 does not ship.
- Force/legacy-peer install: rejected as unsupported and unsafe.
- Add a large new orchestration dependency: rejected; simple npm composition
  and dependency-free Node tooling are sufficient.
- Duplicate upgrade policy across agent entrypoints: rejected; one skill plus
  compact routing minimizes tokens.

## Trade-offs

An exact version assertion requires an intentional one-line update when the
supported TS7 version changes. That explicit maintenance cost is desirable.

## Debt Impact

Reduces executable and documentation drift; adds no runtime dependency.
