import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

// this is the trigger, the initiating action
export const loadSongs = createAction(
  '[music songs] load the songs from the api'
);

// this is the success action - after the songs are loaded
export const loadSongsSucceeded = createAction(
  '[music songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

// todo: Create one we dispatch if the API call failed (e.g. Elias spilled beer on the server again, etc.)


