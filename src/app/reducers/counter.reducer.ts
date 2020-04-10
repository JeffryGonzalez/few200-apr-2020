import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
import { CssSelector } from '@angular/compiler';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};

const myReducer = createReducer(
  initialState, // what you start off with when the app is started up
  on(actions.countReset, (cs) => ({ ...cs, current: 0 })),
  on(actions.countIncremented, (cs) => ({ ...cs, current: cs.current + cs.by })),
  on(actions.countDecremented, (cs) => ({ ...cs, current: cs.current - cs.by })),
  on(actions.countBySet, (cs, a) => ({ ...cs, by: a.by }))
);

// when we dispatch an action to the store, currentState, action => nextState
export function reducer(currentState: CounterState, action: Action): CounterState {
  return myReducer(currentState, action);
}







