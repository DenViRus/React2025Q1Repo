import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';

import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

import { parser as tsParser } from '@typescript-eslint/parser';

import tseslint from 'typescript-eslint';

import reactCompiler from 'eslint-plugin-react-compiler';

import globals from 'globals';

export default tseslint.config(
  // { ignores: ['dist', 'node-modules', 'build'] },
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      eslintPluginPrettier,
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error',
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'prefer-const': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }
);
