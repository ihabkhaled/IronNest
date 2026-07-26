# 01 — Business Analysis

## Problem

A boilerplate must make the safe path the obvious path. Bare `tsc` commands can
become ambiguous in a side-by-side compiler install, repeated gate definitions
can drift, and the context resolver currently returns no curated pack for
toolchain upgrades.

## Stakeholders And Personas

- Repository owner: needs dependable production-project scaffolding.
- Engineers from junior to CTO: need readable, authoritative commands.
- AI agents: need a small task-specific context pack instead of corpus scans.
- Reviewers and operators: need reproducible local/CI evidence.

## Current And Desired State

- Current: TypeScript 7 resolves locally, but scripts rely on npm bin selection;
  gate intent is spread across scripts, hooks, workflows, and documentation.
- Desired: one explicit compiler owner, shared gate entrypoints, zero-warning
  lint, and a deterministic toolchain-maintenance context route.

## Goals And Success Metrics

- Compiler proof reports exactly TypeScript `7.0.2`.
- Lint exits non-zero for any warning.
- Hooks and CI invoke shared public gate scripts.
- Toolchain tasks resolve to a curated pack and pass knowledge benchmarks.
- All executable repository gates pass with zero warnings.

## Assumptions And Dependencies

- The existing package versions represent the intended July 2026 baseline.
- Official TypeScript side-by-side compatibility remains required.
- GitHub Actions observes the same npm scripts as local hooks.

## Risk Of Not Doing The Work

An npm bin-resolution change could silently use the compatibility compiler;
gate drift could create local/CI disagreement; future agents would spend extra
tokens rediscovering the upgrade procedure.

## Exit Decision

Business value is clear: reduce bootstrap risk and recurring maintenance cost.
