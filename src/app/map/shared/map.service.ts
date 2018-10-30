import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
   }
}
