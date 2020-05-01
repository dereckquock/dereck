module.exports = {
  extends: ['plugin:mdx/recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react'],
  rules: {
    'no-var': 'error',
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/display-name': 'warn',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
      rules: {
        'react/jsx-no-undef': 0,
      },
    },
  ],
};
