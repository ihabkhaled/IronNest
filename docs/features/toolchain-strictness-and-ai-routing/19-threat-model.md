# 19 — Threat Model

## Assets And Trust Boundaries

- Build/compiler identity and generated artifacts.
- Dependency and vulnerability gates.
- Git hooks and required CI checks.
- AI context routing that may influence code changes.

## Threats And Controls

| Threat                                          | Control                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| Compatibility compiler silently used for builds | Explicit native binary plus exact-version check                          |
| Warning-only lint findings ignored              | All active production severities are errors and CLI allows zero warnings |
| Local hooks diverge from CI                     | Shared `gate:*` package-script contract with regression tests            |
| Stale or contradictory AI guidance              | Build/check/verify/benchmark knowledge gate                              |
| Dependency weakness missed                      | Release gate requires npm audit and Trivy; audit is currently pending    |

Residual risk is limited to the pending registry audit and clean pinned-runner
install. No application attack surface changed.
