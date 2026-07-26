# Publish a green checkpoint

Use this procedure whenever a coherent part of a larger task is ready. It applies [rule 31](../rules/31-version-control-checkpoints.md); it never overrides the branch target authorized by the task.

## 1. Define the checkpoint

- Name the single concern.
- Include its dependency closure, tests, and required documentation.
- Exclude unrelated cleanup and later features.
- Confirm the commit will not need uncommitted files to lint, typecheck, test, or build.

## 2. Prove it

Run the smallest deterministic gate that proves the concern, then any repository gate required by its risk. Fix root causes; keep zero warnings.

```bash
git diff --check
npm run lint
npm run typecheck
```

Add focused tests, coverage, build, architecture, security, or knowledge gates when the changed surface requires them.

## 3. Stage intentionally

```bash
git status --short
git add <explicit-paths>
git diff --cached --stat
git diff --cached
git diff --cached --check
```

If the staged diff has more than one purpose, unstage the unrelated concern and publish it later. Do not split behavior from its regression test or required docs.

## 4. Commit and push

```bash
git commit -m "<type>(<scope>): <intent>"
git push origin <authorized-branch>
```

Never use `--no-verify`. Push as soon as the checkpoint is green; do not wait for the overall task.

## 5. Monitor

- Confirm local and remote heads match.
- Watch required CI/security/E2E gates.
- If a gate fails, read the failing log, identify the root cause, and publish the smallest follow-up repair.
- Preserve shared history; do not force-push merely to hide a red checkpoint.

## Completion evidence

Report the commit SHA, concern, local gates, push result, and remote gate state. Then begin the next coherent checkpoint.

## Related

[Rule 31](../rules/31-version-control-checkpoints.md) · [Final validation](./final-validation.md) · [Stack and toolchain](../context/stack-and-toolchain.md)
