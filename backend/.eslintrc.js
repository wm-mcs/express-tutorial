module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'commonjs',
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'off',
  },
};
