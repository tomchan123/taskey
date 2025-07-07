/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{ts,vue}': ['eslint --fix', 'prettier --write'],
  '!(*.{ts,vue})': 'prettier --write --ignore-unknown',
}
