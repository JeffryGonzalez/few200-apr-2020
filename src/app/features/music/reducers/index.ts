export const featureName = 'musicFeature';
import * as fromSongs from './songs.reducer';
import * as fromUiHints from './ui-hints.reducer';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { SongListItemModel } from '../models';

export interface MusicState {
  songs: fromSongs.SongState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  uiHints: fromUiHints.reducer
};

// 1. Feature Selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector Per Branch
const selectSongsBranch = createSelector(selectMusicFeature, f => f.songs);
const selectUiHintsBranch = createSelector(selectMusicFeature, f => f.uiHints);
// 3. Any Helpers?
const { selectAll: selectArrayOfSongEntity } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. What our Component Needs

// 4.a. A selector that returns a SongListItemModel[]
export const selectFeatureLoaded = createSelector(
  selectUiHintsBranch,
  b => b.songsLoaded
);

export const selectSongListItemModel = createSelector(
  selectArrayOfSongEntity,
  (songs) => songs.map(song => ({
    ...song,
    isTemporary: song.id.startsWith('T')
  } as SongListItemModel))
);
