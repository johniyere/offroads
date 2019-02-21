import { EntityState } from '@ngrx/entity';

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

export interface Route {
  id: string;
  name: string;
  points?: Point[];
  lines?: Line[];
  creator?: Creator;
  createdAt?: Date;
  avgRating?: number;
}

export interface Creator {
  name: string;
  email?: string;
}

export interface RouteState extends EntityState<Route> {
  selectedRoute: Route;
}
