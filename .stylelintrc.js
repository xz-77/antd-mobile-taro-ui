const stylelint = require('verify-fabric/dist/stylelint');

module.exports = {
  ...stylelint,
  rules: {
    ...stylelint.rules,
    // your rules
    'selector-type-no-unknown': null,
  },
};
