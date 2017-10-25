import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule, InjectedTranslateProps } from 'react-i18next'

export const createI18nConfig = (options: i18n.InitOptions = {}): i18n.i18n => {
  return i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
      fallbackLng: 'en',

      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      debug: true,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      react: {
        wait: true,
      },
      ...options,
    })
}
