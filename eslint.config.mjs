import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    'node_modules/**',
    '.next/**',
    '.worktrees/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-spread': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
  },
  // Server code and CLI scripts report through the console on purpose.
  {
    files: ['scripts/**', 'src/app/api/**'],
    rules: {
      'no-console': ['warn', { allow: ['error', 'warn', 'info', 'log'] }],
    },
  },
]);
