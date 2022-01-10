module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // https://blog.csdn.net/zhanye88/article/details/121644706
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    // https://stackoverflow.com/questions/68776902/should-i-use-pluginvue-essential-and-pluginvue-vue3-recommended-when-linti/68776947
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['./*.js', './*.ts'] }],
    'vue/no-multiple-template-root': 0,
    'global-require': 0,
  },
};
