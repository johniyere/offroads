import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { Observable } from 'rxjs';
import { Route } from '../../routes/routes.state';
import { selectSelectedRoute } from '../../routes/routes.selectors';
import { Feature, Point, FeatureCollection, LineString } from 'geojson';
import { map, filter } from 'rxjs/operators';

/**
 * Based on Mapbox tutorials
 * https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
 * https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
 * https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/
 * https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/
 */
@Component({
  selector: 'ofr-route-details-map',
  templateUrl: './route-details-map.component.html',
  styleUrls: ['./route-details-map.component.scss']
})
export class RouteDetailsMapComponent implements OnInit {
  map: Map;
  selectedRoute$: Observable<Route>;

  points$: Observable<FeatureCollection<Point>>;
  lines$: Observable<FeatureCollection<LineString>>;

  constructor(private store: Store<State>) {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.buildMap();
    this.selectedRoute$ = this.store.pipe(
      select(selectSelectedRoute),
      filter((route) => route != null)
    );

    this.points$ = this.selectedRoute$.pipe(
      map((route) => route.points),
      map((points) =>
        points.map((point) => {
          const coordinates = [point.coordinates.lng, point.coordinates.lat];
          return this.toPointFeature(coordinates);
        })
      ),
      map((pointFeatures) => this.toPointFeatureCollection(pointFeatures))
    );

    this.lines$ = this.selectedRoute$.pipe(
      map((route) => route.lines),
      map((lines) =>
        lines.map((line) => {
          const linePointsAsCooordinatesArray = line.points.map((point) => [point.coordinates.lng, point.coordinates.lat]);
          return this.toLineFeature(linePointsAsCooordinatesArray);
        })
      ),
      map((lineFeatures) => this.toLineFeatureCollection(lineFeatures))
    );
  }

  buildMap() {
    this.map = new Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/outdoors-v9', // stylesheet location
      center: [-1.530398128907791, 54.991025881329364], // starting position [lng, lat]
      zoom: 13 // starting zoom
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

      this.points$.subscribe((points) => {
        (this.map.getSource('point') as any).setData(points);
      });

      this.lines$.subscribe((lines) => {
        (this.map.getSource('route') as any).setData(lines);
      });
    });
  }

  toPointFeature(coordinates: number[]) {
    const newPoint: Feature<Point> = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: coordinates
      },
      properties: {}
    };
    return newPoint;
  }

  toPointFeatureCollection(pointFeatures: Feature<Point>[]) {
    const pointFeatureCollection: FeatureCollection<Point> = {
      type: 'FeatureCollection',
      features: pointFeatures
    };

    return pointFeatureCollection;
  }

  toLineFeature(coordinates: number[][]) {
    const newLine: Feature<LineString> = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: coordinates
      },
      properties: {}
    };
    return newLine;
  }

  toLineFeatureCollection(lineFeatures: Feature<LineString>[]) {
    const lineFeatureCollection: FeatureCollection<LineString> = {
      type: 'FeatureCollection',
      features: lineFeatures
    };
    return lineFeatureCollection;
  }

}
