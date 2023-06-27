/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  globals: {
    require: 'readonly',
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        printWidth: 100,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'],
      },
    ],
    'vue/no-setup-props-destructure': ['off'],
    'no-prototype-builtins': 'off',
    'space-before-function-paren': [0, 'never'],
  },
};
