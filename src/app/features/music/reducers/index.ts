export const featureName = 'musicFeature';
import * as fromSongs from './songs.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface MusicState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
};
