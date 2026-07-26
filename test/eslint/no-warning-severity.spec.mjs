import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
);
const REPRESENTATIVE_SOURCE = path.join(
  REPO_ROOT,
  'src/modules/articles/application/articles.service.ts',
);
const WARNING_SEVERITY = 1;

describe('ESLint severity contract', () => {
  it('configures no enabled production rule as a warning', async () => {
    const eslint = new ESLint({ cwd: REPO_ROOT });
    const config = await eslint.calculateConfigForFile(REPRESENTATIVE_SOURCE);
    const warningRules = Object.entries(config.rules)
      .filter(([, setting]) => setting[0] === WARNING_SEVERITY)
      .map(([ruleId]) => ruleId);

    expect(warningRules).toEqual([]);
  }, 15_000);
});
