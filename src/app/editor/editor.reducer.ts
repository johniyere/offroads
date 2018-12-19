import { EditorState } from './editor.state';
import { EditorAction, EditorActionTypes } from './editor.actions';

export const initialState: EditorState = {
  name: '',
  points: [],
  lines: []
};

export function editorReducer(state = initialState, action: EditorAction): EditorState {
  switch (action.type) {
    case EditorActionTypes.AddPoint:
      return {
        ...state,
        points: [...state.points, action.payload]
      };
    case EditorActionTypes.AddNextPointWithLine:
      return {
        ...state,
        points: [...state.points, action.payload.point],
        lines: [...state.lines, action.payload.line]
      };
    default:
      return state;
  }
}
