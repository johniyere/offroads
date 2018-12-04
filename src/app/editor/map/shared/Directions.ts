import { LineString } from 'geojson';

export interface Legs {
  summary: string;
  weight: number;
  duration: number;
  steps: Array<any>;
  distance: number;
}

export interface WayPoint {
  name: string;
  location: number[];
}

export interface Route {
  geometry: LineString;
  legs: Legs[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}
export interface Directions {
  routes: Route[];
  waypoints: WayPoint[];
  code: string;
  uuid: string;
}
