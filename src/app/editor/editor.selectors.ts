import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, EditorState } from './editor.state';

export const selectEditorState = createFeatureSelector<State, EditorState>(
  'editor'
);

export const selectEditor = createSelector(
  selectEditorState,
  (state: EditorState) => state
);

export const selectPoints = createSelector(
  selectEditor,
  (editor) => editor.points
);

export const selectLastPoint = createSelector(
  selectPoints,
  (points) => points[points.length - 1]
);

export const selectLines = createSelector(
  selectEditor,
  (editor) => editor.lines
);

export const selectName = createSelector(
  selectEditor,
  (editor) => editor.name
);
