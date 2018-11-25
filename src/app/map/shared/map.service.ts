import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LngLat } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Position } from 'geojson';

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
}
