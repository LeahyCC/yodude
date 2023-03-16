module.exports = {
  // Run type-check on changes to TypeScript files
  '*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  // Lint and fix all JavaScript/TypeScript files
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write', 'git add'],
  // Format all JSON files
  // "*.json": ["prettier --write", "git add"],
  // Format all Markdown files
  // "*.md": ["prettier --write", "git add"]
}
