import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  getMapTerrainData(coordinates: LngLat) {
    const coordString = `${coordinates.lng},${coordinates.lat}`;
    console.log(coordString);
    const endpoint = `https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/
    ${coordString}.json?access_token=${environment.mapbox.accessToken}`;
    return this.http.get(endpoint);
  }
}
