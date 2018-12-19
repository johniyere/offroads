import { Point, Line } from './editor.model';
import { AppState } from '../core/core.state';

export interface EditorState {
  name: string;
  points: Point[];
  lines: Line[];
}

export interface State extends AppState {
  editor: EditorState;
}
