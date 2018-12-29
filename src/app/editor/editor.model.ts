export interface Point {
  coordinates: Coordinates;
  elevation: number;
  distanceFromPreviousPoint: number;
}

export interface Line {
  points: LinePoint[];
}

export interface LinePoint {
  coordinates: Coordinates;
  elevation: number;
}
export interface Coordinates {
  lat: number;
  lng: number;
}
