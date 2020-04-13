import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../.././environments/environment';
import * as songActions from '../actions/songs.actions';
import { SongEntity } from '../reducers/songs.reducer';
import { switchMap, map } from 'rxjs/operators';
@Injectable()
export class SongsEffects {

  // loadSongs => loadSongsSucceeded

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.loadSongs), // if it is a loadSongs
      switchMap(() => this.client.get<GetSongsResponse>(environment.songsUrl) // switch over to another stream (switchMap)
        .pipe(
          map(r => r.data), // { data: SongEntity[] } => SongEntity[]
          map(payload => songActions.loadSongsSucceeded({ payload })) // Dispatch the action!
        )
      )
    )
    , { dispatch: true }
  );
  constructor(private actions$: Actions, private client: HttpClient) { }
}


interface GetSongsResponse {
  data: SongEntity[];
}
