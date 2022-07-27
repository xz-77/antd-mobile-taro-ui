const eslint = require('verify-fabric/dist/eslint');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/naming-convention': 0,
  },
};
