import { Component, OnInit } from '@angular/core';
import { MapService } from './shared/map.service';
import { Map, LngLat } from 'mapbox-gl';
import { FeatureCollection, GeoJson, Line } from './shared/map';
import { LineString, Feature } from 'geojson';

@Component({
  selector: 'ofr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  points = new FeatureCollection([]);

  route: LngLat[] = [];

  line: number[][] = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    this.map = new Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-122.486052, 37.830348], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    this.map.on('load', () => {

      // Register point source
      this.map.addSource('point', {
        'type': 'geojson',
        'data': {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
          type: 'Feature',
          properties: {},
          geometry: {
            'type': 'LineString',
            'coordinates': []
          }
        }
      });

      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 2
        }
      });

      this.map.addLayer({
        'id': 'point',
        'type': 'circle',
        'source': 'point',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#3887be'
        }
      });
    });

    this.map.on('click', event => {
      const coordinates = event.lngLat.toArray();
      console.log(coordinates);
      const point = new GeoJson('Point', coordinates);
      console.log(point);
      this.points.features.push(point);
      (this.map.getSource('point') as any).setData(this.points);
      this.addToRoute(event.lngLat);

      // this.line.push(coordinates);
      // const feature = new Line(this.line);
      // console.log(feature);
      // (this.map.getSource('route') as any).setData(feature);
    });
  }


  addToRoute(coordinates: LngLat) {
    if (this.route.length > 2) {
      this.route = [coordinates];
      return;
    }

    if (this.route.length === 1) {
      this.route.push(coordinates);
      this.mapService.getRoute(this.route[0], this.route[1])
        .subscribe((data: any) => {
          const routeLine: Feature<LineString> = {
            type: 'Feature',
            properties: {},
            geometry: data.routes[0].geometry
          };
          console.log(data);
          console.log(routeLine);
          (this.map.getSource('route') as any).setData(routeLine);
        });
      return;
    }

    this.route.push(coordinates);
  }

}
