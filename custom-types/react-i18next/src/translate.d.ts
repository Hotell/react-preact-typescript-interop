import * as React from 'react'
import { InferableComponentEnhancer } from 'react-redux'
import { i18n, TranslationFunction } from 'i18next'

export interface TranslateOptions {
  withRef?: boolean
  bindI18n?: string
  bindStore?: string
  translateFuncName?: string
  wait?: boolean
  nsMode?: string
  i18n?: i18n
}

export interface InjectedProps {
  t: TranslationFunction
  i18n: i18n
}

export default function translate<TKey extends string = string>(
  namespaces?: TKey[] | TKey,
  options?: TranslateOptions
): InferableComponentEnhancer<InjectedProps>
