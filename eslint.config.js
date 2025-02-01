import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  { ignores: ['dist', 'node-modules', 'build'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettier,
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
      'no-console': 'warn',
      'no-multiple-empty-lines': 'error',
      'no-multi-spaces': 'error',
      'prefer-const': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/order': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'off',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
