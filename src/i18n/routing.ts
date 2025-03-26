import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'de', 'es'],

  // Used when no locale matches
  defaultLocale: 'fr'
});
