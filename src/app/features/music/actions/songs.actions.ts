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


// For adding a song.
let tempId = 1;
export const songAdded = createAction(
  '[music songs] song added',
  ({ title, artist, album, year }: { title: string, artist: string, album: string, year: number }) => ({
    payload: {
      title, artist, album, year, id: 'T' + tempId++
    } as SongEntity
  })
);


export const songAddedSuccessfully = createAction(
  '[music songs] song added successfully',
  props<{ oldId: string, payload: SongEntity }>()
);

export const songAddedFailure = createAction(
  '[music songs] song added failure',
  props<{ errorMessage: string, payload: SongEntity }>()
);
