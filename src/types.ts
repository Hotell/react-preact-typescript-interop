import { Reducer } from 'redux'

export type Mixed = {}
export type Maybe<T> = T | null | undefined

// Redux types
export type StateToReducerMap<S> = { readonly [P in keyof S]: Reducer<S[P]> }
export type Action = Readonly<{
  type: string
  payload?: any
}>
