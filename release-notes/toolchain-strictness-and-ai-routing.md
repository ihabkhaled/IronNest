# Toolchain Strictness And AI Routing

Status: draft; not released.

- Typecheck and build now prove and explicitly execute native TypeScript 7.0.2.
- ESLint 10.8 runs with zero warnings and rejects unused disable comments.
- All recommended security rules are errors.
- Husky and eight GitHub workflows use shared `gate:*` package scripts.
- The AI knowledge gate checks freshness, contradictions, and routing budgets.
- A curated toolchain-upgrade skill and context route reduce agent context cost.
- Compatible package updates and exact transitive fixes reduced npm audit and Trivy to zero findings.

There are no application API or runtime behavior changes. Nest's optional static peer is held at patched 10.1.2 by an exact security override and protected by audit, Trivy, and E2E gates. Pinned-runner validation, GitHub checks, and approval remain pending.
