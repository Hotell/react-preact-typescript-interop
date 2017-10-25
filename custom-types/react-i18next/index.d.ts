//  "name": "react-i18next",
//  "version": "6.0.6",
import * as I18next from 'i18next'
import * as React from 'react'
import { InferableComponentEnhancer } from 'react-redux'
// import translate from './src/translate'

declare module 'react-i18next' {
  export interface InjectedI18nProps {
    t: I18next.TranslationFunction
    i18n: I18next.i18n
  }

  export function translate<TKey extends string = string>(
    namespaces?: TKey[] | TKey,
    options?: TranslateOptions
  ): InferableComponentEnhancer<InjectedI18nProps>

  // export { translate } from './src/translate.d.ts'
  export { reactI18nextModule, setDefaults, getDefaults, setI18n, getI18n } from './src/context'
}
