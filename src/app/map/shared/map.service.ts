import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Position } from 'geojson';
import { LngLat } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  getRoute(start: Position, end: Position) {
    const startString = `${start[0]},${start[1]}`;
    const endString = `${end[0]},${end[1]}`;
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${startString};${endString}?
geometries=geojson&access_token=pk.eyJ1Ijoiam9obml5ZXJlIiwiYSI6ImNqbXVxaHNtOTJxenUza29lZDE3MGlidncifQ.W-M8wzC7mnnXvH47GxVN4w`;

    return this.http.get(url);

  }

  getMapTerrainData(coordinates: LngLat) {
    const coordString = `${coordinates.lng},${coordinates.lat}`;
    console.log(coordString);
    const endpoint = `https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/
    ${coordString}.json?access_token=${environment.mapbox.accessToken}`;
    return this.http.get(endpoint);
  }
}
