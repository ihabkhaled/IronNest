# 16 — Developer Bug Log

| ID     | Finding                                 | Root cause                                                                | Fix                                                                        | Retest                                  |
| ------ | --------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------- |
| DV-001 | Security rules resolved as warnings     | The plugin's recommended preset carries warning severities                | Normalize every recommended security rule to error while retaining options | Severity contract and lint pass         |
| DV-002 | Knowledge gate reported stale manifests | Canonical docs and a skill changed                                        | Regenerated the four committed manifests                                   | Check, verify, and 13/13 benchmark pass |
| DV-003 | One coverage run lost `coverage/.tmp`   | Two Vitest coverage processes used the same report directory concurrently | Stopped parallel repo validation and reran serially                        | Uncontended full validation passed      |

No open implementation defects remain.
