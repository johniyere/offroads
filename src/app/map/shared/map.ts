import { Geometry, LineString, Point } from 'geojson';

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IGeoJson {
  type: string;
  geometry: IGeometry;
}

export class GeoJson implements IGeoJson {
type = 'Feature';
geometry: IGeometry;

constructor(type: string,  coordinates: number[]) {
    this.geometry = {
      type: type,
      coordinates: coordinates
    };
  }
}

export class WayPoint {
  type = 'Featire';
  geometry: Point;

  constructor(coordinates: number[]) {
    this.geometry = {
      type: 'Point',
      coordinates: coordinates
    };
  }
}

export class Line {
    type = 'Feature';
    geometry: LineString;

    constructor(coordinates: number[][]) {
      this.geometry = {
        type: 'LineString',
        coordinates: coordinates
      };
    }
}


export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) {}
}
