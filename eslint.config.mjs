import globals from 'globals';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: {
      globals: Object.fromEntries(
        Object.entries(globals.browser).map(([key, value]) => [
          key.trim(), // This will remove leading/trailing whitespace
          value,
        ])
      ),
    },
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      eqeqeq: 'error',
      'consistent-return': 'error',
      'callback-return': 'error',
      // Prettier-related rule
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
      // Add Prettier's eslint-config-prettier rules to disable conflicting rules
      ...prettier.rules,
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
];
