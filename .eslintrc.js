const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    '$Diff': true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'arrow-body-style': off,
    'dot-notation': off,
    'consistent-return': off,
    'import/default': off,
    'import/extensions': off,
    'import/named': off,
    'import/namespace': off,
    'import/no-cycle': off,
    'import/no-deprecated': off,
    'import/no-duplicates': off,
    'import/no-extraneous-dependencies': off,
    'import/no-named-as-default': off,
    'import/no-named-as-default-member': off,
    'import/no-self-import': off,
    'import/no-useless-path-segments': off,
    'import/no-unresolved': off,
    'import/order': off,
    'import/prefer-default-export': off,
    indent: error,
    'jsx-a11y/alt-text': off,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-console': off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-unused-vars': off,
    'quotes': [error, 'single'],
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-namespace': off,
    '@typescript-eslint/no-unused-vars': warn,
    '@typescript-eslint/no-empty-interface': off,
    '@typescript-eslint/no-use-before-define': off,
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true, allowTypedFunctionExpressions: true }]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
    useJSXTextNode: true,
  },
  overrides: [],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      typescript: {},
    },
  },
};