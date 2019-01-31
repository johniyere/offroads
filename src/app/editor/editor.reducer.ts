import { EditorState } from './editor.state';
import { EditorAction, EditorActionTypes } from './editor.actions';

export const initialState: EditorState = {
  name: '',
  points: [],
  lines: [],
  elevationGain: 0,
  scenary: 1,
  description: '',
  difficulty: 1
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
    case EditorActionTypes.SetRouteName:
      return {
        ...state,
        name: action.payload
      };
    case EditorActionTypes.SetElevationGain:
      return {
        ...state,
        elevationGain: action.payload.elevationGain
      };
    case EditorActionTypes.SetDifficulty:
      return {
        ...state,
        difficulty: action.payload.difficulty
      };
    case EditorActionTypes.SetScenary:
      return {
        ...state,
        scenary: action.payload.scenary
      };
    case EditorActionTypes.SetDescription:
      return {
        ...state,
        description: action.payload.description
      };
    case EditorActionTypes.ClearRoute:
      return initialState;
    default:
      return state;
  }
}
