import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  unocss: true,
  rules: {
    'no-console': 'off',
    'ts/ban-ts-comment': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          ['type'],
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
})
