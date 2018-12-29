export interface Point {
  coordinates: Coordinates;
  elevation: number;
  distanceFromPreviousPoint?: number;
}

export interface Line {
  points: Point[];
}

export interface Coordinates {
  lat: number;
  lng: number;
}
