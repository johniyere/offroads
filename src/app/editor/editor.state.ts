import { Point, Line } from './editor.model';
import { AppState } from '../core/core.state';

export interface EditorState {
  name: string;
  points: Point[];
  lines: Line[];
  elevationGain: number;
  description: string;
  scenary: number;
  difficulty: number;
}

export interface State extends AppState {
  editor: EditorState;
}
