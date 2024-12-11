import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
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
        "no-unused-vars": "error",
        "no-console": "warn",
        "eqeqeq": "error",
        "consistent-return": "error",
        "callback-return": "error"
    }
  }
];
