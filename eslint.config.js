module.exports = {
  ignores: [
    '.next/**',
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
    'public/**',
    'out/**'
  ],
  extends: ['next/core-web-vitals'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off'
  }
}
