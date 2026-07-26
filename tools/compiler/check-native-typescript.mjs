#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NATIVE_PACKAGE_NAME = '@typescript/native';
const TYPESCRIPT_ALIAS_PREFIX = 'npm:typescript@';
const VERSION_OUTPUT_PREFIX = 'Version ';

function readPackageJson(repoRoot) {
  return JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
}

export function readExpectedNativeCompilerVersion(repoRoot) {
  const packageJson = readPackageJson(repoRoot);
  const alias = packageJson.devDependencies?.[NATIVE_PACKAGE_NAME];
  if (typeof alias !== 'string' || !alias.startsWith(TYPESCRIPT_ALIAS_PREFIX)) {
    throw new Error(
      `${NATIVE_PACKAGE_NAME} must alias ${TYPESCRIPT_ALIAS_PREFIX}<version>.`,
    );
  }
  return alias.slice(TYPESCRIPT_ALIAS_PREFIX.length);
}

export function assertNativeCompilerVersion({ actualOutput, expectedVersion }) {
  const output = actualOutput.trim();
  if (!output.startsWith(VERSION_OUTPUT_PREFIX)) {
    throw new Error(
      `Could not parse the TypeScript compiler version from "${output}".`,
    );
  }
  const actualVersion = output.slice(VERSION_OUTPUT_PREFIX.length);
  if (actualVersion !== expectedVersion) {
    throw new Error(
      `Expected TypeScript ${expectedVersion}, received ${actualVersion}.`,
    );
  }
  return actualVersion;
}

export function checkNativeCompiler(repoRoot) {
  const expectedVersion = readExpectedNativeCompilerVersion(repoRoot);
  const compilerPath = path.join(
    repoRoot,
    'node_modules',
    NATIVE_PACKAGE_NAME,
    'bin',
    'tsc',
  );
  const actualOutput = execFileSync(
    process.execPath,
    [compilerPath, '--version'],
    {
      cwd: repoRoot,
      encoding: 'utf8',
    },
  );
  return assertNativeCompilerVersion({ actualOutput, expectedVersion });
}

const CURRENT_FILE = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(CURRENT_FILE), '..', '..');
const invokedFile = process.argv[1];

if (
  invokedFile !== undefined &&
  path.resolve(invokedFile) === path.resolve(CURRENT_FILE)
) {
  try {
    const version = checkNativeCompiler(REPO_ROOT);
    process.stdout.write(
      `compiler:check — TypeScript ${version} native CLI verified.\n`,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`compiler:check — ${message}\n`);
    process.exitCode = 1;
  }
}
