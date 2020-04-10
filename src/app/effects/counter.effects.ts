import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
@Injectable()
export class CounterEffects {

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet), // notCountBySet? Done.
      tap(a => localStorage.setItem('by', a.by.toString()))
    )
    , { dispatch: false });

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(a.type))
  //   ), { dispatch: false }
  // );

  constructor(private actions$: Actions) { }
}
