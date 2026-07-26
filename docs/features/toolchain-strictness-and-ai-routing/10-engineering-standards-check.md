# 10 — Engineering Standards Check

| Standard                    | Decision                                                 |
| --------------------------- | -------------------------------------------------------- |
| Canonical policy and phases | Followed; 00–13 exist before implementation              |
| TypeScript strictness       | Preserve every compiler flag; explicit TS7 CLI           |
| ESLint                      | Zero errors and zero warnings; no suppressions           |
| Package compatibility       | Official side-by-side layout only                        |
| Lockfile integrity          | Package-manager generated; never hand-edited             |
| Gate parity                 | Public npm scripts shared by hooks and CI                |
| Tests first                 | Compiler/routing regression tests precede implementation |
| AI context                  | One canonical skill and compact resolver pack            |
| Simplicity/YAGNI            | Dependency-free scripts; no new framework                |
| Security                    | No force/legacy-peer resolution; audit/scan retained     |
| Documentation               | Commands, runbooks, support, and generated aids updated  |

## Request-Specific Rules

- Native compiler path and expected version have one owner.
- Every ESLint entrypoint includes `--max-warnings 0`.
- Knowledge routing must not become a second policy authority.

## Permanent Rule Update

No new company policy is required; the request makes existing policy
executable. `claude.md` and full mirrors therefore remain unchanged.

## Exit Decision

Standards are explicit and implementation may proceed after test planning.
