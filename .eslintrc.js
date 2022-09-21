const eslint = require('verify-fabric/dist/eslint');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/naming-convention': 0,
    'consistent-return': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-fragments': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
