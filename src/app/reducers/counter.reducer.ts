import { Action } from '@ngrx/store';


export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 999
};

export function reducer(currentState: CounterState = initialState, action: Action) {
  // for right now
  return currentState;
}




