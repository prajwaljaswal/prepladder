module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'react'],
  extends: ['standard', 'plugin:react/recommended', 'eslint-config-prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['**/dist/*.js'],
  rules: {
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    camelcase: 0,
    'react/prop-types': [2],
    'react/react-in-jsx-scope': 0,
  },
  overrides: [
    {
      files: ['**/*.json'],
      extends: ['plugin:json/recommended'],
    },
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-expressions': 1,
      },
    },
    {
      files: ['**/__mocks__/*.js'],
      rules: {
        'require-jsdoc': 0,
      },
    },
    {
      files: ['**/*.+(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    },
  ],
  globals: {
    ErrorCustom: true,
    expect: true,
    shallow: true,
    mount: true,
    jest: true,
    render: true,
    Generator: true,
    SyntheticEvent: true,
    SyntheticInputEvent: true,
    Class: true,
    React$Component: true,
    System: true,
    cy: true,
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
