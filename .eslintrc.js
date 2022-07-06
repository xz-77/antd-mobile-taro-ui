module.exports = {
  extends: [require.resolve('verify-fabric/dist/eslint')],
  rules: {
    'compat/compat': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': 0,
    '@typescript-eslint/no-unused-vars': 1,
  },
};
