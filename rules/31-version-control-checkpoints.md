# 31 — Version-control checkpoints

> Authority: normative. Hooks enforce mechanical safety; reviewers enforce coherent scope and prompt publication.

## Mandatory

- MUST split work into the smallest coherent batches that remain independently understandable, buildable, testable, and revertible.
- MUST keep changed behavior with its tests and required documentation; never split an atomic behavior-and-proof unit merely to reduce file count.
- MUST stage files intentionally and inspect the staged diff before every commit.
- MUST run the focused deterministic gate for that batch immediately before committing.
- MUST use a conventional commit message that describes the shipped concern.
- MUST push each green commit promptly to the explicitly authorized branch instead of accumulating a high-risk final publication.
- MUST monitor remote gates and repair a failed checkpoint through the smallest root-cause follow-up commit.

## Forbidden

- NEVER commit or push a known-red checkpoint.
- NEVER depend on later uncommitted files, premature exports, or hidden local state to make a pushed commit valid.
- NEVER bypass pre-commit, commit-message, pre-push, or CI gates.
- NEVER mix unrelated behavior, design, dependency, test, and documentation concerns because they happened in one work session.
- NEVER defer all publication to a final mega-commit when a coherent green checkpoint is available.
- NEVER rewrite shared history to hide a gate failure; preserve the evidence and add a focused repair.

## Checkpoint sequence

1. Choose one concern and its dependency closure.
2. Add its tests and required documentation.
3. Run the focused gate and fix the root cause of every warning or error.
4. Stage explicitly; review `git diff --cached` and `git diff --cached --check`.
5. Commit conventionally without bypassing hooks.
6. Push immediately to the branch authorized by the task.
7. Watch required remote checks; repair failures before expanding the same concern.

## Definition of done

- [ ] The staged diff has one purpose and contains its proof.
- [ ] The committed tree passes the relevant focused gate independently.
- [ ] Hooks ran without bypass.
- [ ] The commit was pushed successfully and its remote gates were checked.

## Related

[15 — Review checklist](./15-review-checklist.md) · [29 — Agent readiness](./29-agent-readiness-and-mirrors.md) · [Stack and toolchain](../context/stack-and-toolchain.md) · [Publish a green checkpoint](../skills/publish-green-checkpoint.md)
