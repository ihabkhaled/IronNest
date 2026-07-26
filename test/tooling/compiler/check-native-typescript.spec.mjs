import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import {
  assertNativeCompilerVersion,
  readExpectedNativeCompilerVersion,
} from '../../../tools/compiler/check-native-typescript.mjs';

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  '..',
);

describe('check-native-typescript', () => {
  it('derives the expected version from the package alias', () => {
    expect(readExpectedNativeCompilerVersion(REPO_ROOT)).toBe('7.0.2');
  });

  it('accepts the exact native compiler version', () => {
    expect(
      assertNativeCompilerVersion({
        actualOutput: 'Version 7.0.2\n',
        expectedVersion: '7.0.2',
      }),
    ).toBe('7.0.2');
  });

  it('rejects a compatibility compiler or future drift', () => {
    expect(() =>
      assertNativeCompilerVersion({
        actualOutput: 'Version 6.0.2\n',
        expectedVersion: '7.0.2',
      }),
    ).toThrow('Expected TypeScript 7.0.2, received 6.0.2.');
  });

  it('rejects malformed compiler output', () => {
    expect(() =>
      assertNativeCompilerVersion({
        actualOutput: 'unknown compiler',
        expectedVersion: '7.0.2',
      }),
    ).toThrow('Could not parse the TypeScript compiler version');
  });
});
