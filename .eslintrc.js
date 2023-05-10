module.exports = {
  ignorePatterns: [
    'dist/**/*.js'
  ],
  extends: [
    '@munierujp/eslint-config-typescript',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'unicorn/prefer-top-level-await': 'off'
  }
}
