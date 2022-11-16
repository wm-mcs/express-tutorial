// eslint-disable-next-line no-undef
module.exports = {
  root:true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-boolean-default': ['error', 'no-default'],
  },
};
