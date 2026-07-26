import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  '..',
);
const PACKAGE_JSON = JSON.parse(
  readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'),
);

function read(relativePath) {
  return readFileSync(path.join(REPO_ROOT, relativePath), 'utf8');
}

describe('canonical local and CI gate contract', () => {
  it('uses the explicit TypeScript 7 native compiler for every compiler gate', () => {
    expect(PACKAGE_JSON.scripts['compiler:version']).toBe(
      'node node_modules/@typescript/native/bin/tsc --version',
    );
    expect(PACKAGE_JSON.scripts.typecheck).toContain(
      'node node_modules/@typescript/native/bin/tsc',
    );
    expect(PACKAGE_JSON.scripts.build).toContain(
      'node node_modules/@typescript/native/bin/tsc',
    );
  });

  it('makes every ESLint warning and unused suppression blocking', () => {
    expect(PACKAGE_JSON.scripts.lint).toContain('--max-warnings 0');
    expect(PACKAGE_JSON.scripts.lint).toContain(
      '--report-unused-disable-directives',
    );
    expect(read('.lintstagedrc.cjs')).toContain('--max-warnings 0');
  });

  it('routes hooks through shared aggregate gate scripts', () => {
    expect(read('.husky/pre-commit').trim()).toBe('npm run gate:commit');
    expect(read('.husky/pre-push').trim()).toBe('npm run gate:push');
  });

  it.each([
    ['gate-lint.yml', 'npm run gate:lint'],
    ['gate-typecheck.yml', 'npm run gate:typecheck'],
    ['gate-unit-tests.yml', 'npm run gate:unit'],
    ['gate-e2e.yml', 'npm run gate:e2e'],
    ['gate-coverage.yml', 'npm run gate:coverage'],
    ['gate-build.yml', 'npm run gate:build'],
    ['gate-knowledge.yml', 'npm run gate:knowledge'],
    ['gate-security-scan.yml', 'npm run gate:security'],
  ])('%s calls its authoritative package gate', (workflow, command) => {
    expect(read(`.github/workflows/${workflow}`)).toContain(command);
  });
});
