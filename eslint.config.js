import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.vscode/*',
    '.git/*',
    '.nuxt/*',
    '.output/*',
    'dist/*',
    'node_modules/*',
    'public/*',
    'nuxt.config.ts',
    '*.md',
    '*/**.md',
  ],
}, {
  // Nuxt auto-imported composables — declared as globals so no-undef doesn't fire.
  languageOptions: {
    globals: {
      defineNuxtPlugin: 'readonly',
      useHead: 'readonly',
      useSeoMeta: 'readonly',
      useRuntimeConfig: 'readonly',
    },
  },
})
