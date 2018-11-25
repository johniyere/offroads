import { Component, OnInit } from '@angular/core';
import { MapService } from './shared/map.service';
import { Map } from 'mapbox-gl';
import { LineString, Feature, FeatureCollection, Point } from 'geojson';

@Component({
  selector: 'ofr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  points: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: []
  };
  lines: FeatureCollection<LineString> = {
    type: 'FeatureCollection',
    features: []
  };

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    this.map = new Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/outdoors-v9', // stylesheet location
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
            'line-width': 4
        }
      });

      this.map.addLayer({
        'id': 'point',
        'type': 'circle',
        'source': 'point',
        'paint': {
            'circle-radius': 7,
            'circle-color': '#3887be'
        }
      });
    });

    this.map.on('click', event => {
      const coordinates = event.lngLat.toArray();
      const newPoint: Feature<Point> = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coordinates
        },
        properties: {}
      };

      const newPointsFeatures: Array<Feature<Point>> = [...this.points.features, newPoint];
      this.points = {...this.points, features: newPointsFeatures};
      console.log(this.points);
      (this.map.getSource('point') as any).setData(this.points);

      if (this.points.features.length > 1) {
        const pointsLength = this.points.features.length;

        const [start, end] = [this.points.features[pointsLength - 1], this.points.features[pointsLength - 2]];

        this.mapService.getRoute(start.geometry.coordinates, end.geometry.coordinates)
          .subscribe((data: any) => {
            const newLine: Feature<LineString> = {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: data.routes[0].geometry.coordinates
              },
              properties: {}
            };

            const newLineFeatures: Array<Feature<LineString>> = [...this.lines.features, newLine];
            this.lines = {...this.lines, features: newLineFeatures};
            console.log(this.lines);
            (this.map.getSource('route') as any).setData(this.lines);
          });
      }
    });
  }

}
