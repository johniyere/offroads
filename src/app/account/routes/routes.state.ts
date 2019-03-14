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
  creator?: User;
  createdAt?: Date;
  avgRating?: number;
  runs?: Run[];
  reviews?: Review[];
}

export interface User {
  id: string;
  name: string;
  email?: string;
}

export interface Run {
  id: string;
  title?: string;
  comment?: string;
  route?: Route;
  uploader?: User;
  createdAt?: Date;
  time?: number;
}

export interface Review {
  id: string;
  rating?: number;
  reviewer?: User;
  route?: Route;
  createdAt?: Date;
  comment?: string;
}

export interface RouteState extends EntityState<Route> {
  selectedRoute: Route;
}
