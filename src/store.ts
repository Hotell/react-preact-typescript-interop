import { createStore, Store, Action, combineReducers } from 'redux'
import { StateToReducerMap } from './types'

const enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}
export class IncrementAction implements Action {
  readonly type = ActionTypes.INCREMENT
}
export class DecrementAction implements Action {
  readonly type = ActionTypes.DECREMENT
}
type Actions = IncrementAction | DecrementAction

type State = {
  counter: number
}
const initialState = 0

const counterReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1
    case ActionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export const createStoreFactory = (): Store<State> => {
  const reducers: StateToReducerMap<State> = {
    counter: counterReducer,
  }
  const rootReducer = combineReducers<State>(reducers)

  return createStore(rootReducer)
}
