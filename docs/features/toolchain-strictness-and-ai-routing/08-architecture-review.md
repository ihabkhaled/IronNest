# 08 — Architecture Review

## Current Architecture

Application layering is unchanged. This request touches only the operational
tooling plane and the compiled AI acceleration plane.

## Boundary And Data-Flow Changes

```text
hooks / CI
  -> public gate:* npm scripts
    -> explicit TS7 compiler / ESLint / Vitest / knowledge tools

task text
  -> knowledge resolver
    -> curated toolchain pack
      -> exact rule + skill + validation commands
```

## Contracts

- New developer-tool contract: `compiler:check` proves the supported compiler.
- New stable gate-script names become local/CI public entrypoints.
- New knowledge pack is advisory routing; canonical rules retain authority.

## ADR Decision

No ADR required: no application or deployment architecture changes. The work
implements existing package/toolchain and generated-knowledge policy.

## Risks

Version strings can drift unless compiler tests, docs, and generated knowledge
move together; knowledge checks cover this.

## Exit Decision

Architecture fit accepted; boundaries remain explicit and one-way.
