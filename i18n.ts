// Internationalization (i18n) configuration object.
// Exported as const to be read-only.
export const i18nConfig = {
  // Sets a default locale.
  defaultLocale: 'vi',
  // Supported locales found in @/translations directory.
  locales: ['en', 'vi'],
} as const;

// Exports a type from the i18nConfig, can represent any locale in locales array.
export type Locale = (typeof i18nConfig)['locales'][number];