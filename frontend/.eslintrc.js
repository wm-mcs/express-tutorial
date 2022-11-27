// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'html'],
  rules: {
    'react/prop-types': 'off',
  },
};
