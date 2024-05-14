module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "comma-dangle": ["error", "always-multiline"],
    'semi': ['error', 'always'],
    'react/jsx-indent': ['error', 4], // Indentation for JSX
    'react/jsx-indent-props': ['error', 4], // Indentation for JSX props
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true
    }],
    'react/jsx-closing-tag-location': 'error',
    "react/jsx-curly-newline": ["error", {
      "multiline": "consistent"
    }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "multiline" }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "max-len": ["error", { "code": 120 }]
  },
}
