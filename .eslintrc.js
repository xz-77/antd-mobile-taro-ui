module.exports = {
  extends: [require.resolve('verify-fabric/dist/eslint')],
  rules: {
    // your rules
    'import/extensions': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
