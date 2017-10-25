import * as I18next from 'i18next'
import * as ReactI18n from 'react-i18next'

export interface TranslateOptions {
  withRef: boolean
  bindI18n: string
  bindStore: string
  wait: boolean
  translateFuncName: 't' | string
  nsMode: string | 'default'
}
export const reactI18nextModule: {
  type: '3rdParty'

  init(instance: I18next.i18n): void
}
export function setDefaults(options: Partial<TranslateOptions>): void
export function getDefaults(): TranslateOptions
export function setI18n(instance: I18next.i18n): void
export function getI18n(): I18next.i18n
