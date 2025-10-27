import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
  ...tseslint.configs.recommended, // TypeScript recommended rules
  eslintConfigPrettier,
];
