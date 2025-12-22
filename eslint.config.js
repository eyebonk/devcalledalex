import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.vscode/*',
    '.git/*',
    '.github/*',
    'dist/*',
    'node_modules/*',
    'public/*',
    '*.md',
    '*/**.md',
  ],
  rules: {
    // Allow process.env usage in server files
    'node/prefer-global/process': 'off',
  },
})
