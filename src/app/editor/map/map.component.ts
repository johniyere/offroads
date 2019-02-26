import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';
import { LineString, Feature, FeatureCollection, Point } from 'geojson';
import { Store, select } from '@ngrx/store';
import { State } from '../editor.state';
import { GetPointElevation, GetLineToPoint, SetElevationGain } from '../editor.actions';
import { selectPoints, selectLines } from '../editor.selectors';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { EditorService } from '../shared/editor.service';

@Component({
  selector: 'ofr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  points$: Observable<FeatureCollection<Point>>;
  lines$: Observable<FeatureCollection<LineString>>;
  distance = 0;
  isFirstPoint = true;
  constructor(private store: Store<State>, private editorService: EditorService) {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.points$ = this.store.pipe(
      select(selectPoints),
      map((points) =>
        points.map((point) => {
          const coordinates = [point.coordinates.lng, point.coordinates.lat];
          return this.toPointFeature(coordinates);
        })
      ),
      map((pointFeatures) => this.toPointFeatureCollection(pointFeatures))
    );

    this.lines$ = this.store.pipe(
      select(selectLines),
      tap((lines) => {
        const elevationGain = this.editorService.calculateElevationGain(lines);
        this.store.dispatch(new SetElevationGain({ elevationGain }));
      }),
      map((lines) =>
        lines.map((line) => {
          const linePointsAsCooordinatesArray = line.points.map((point) => [point.coordinates.lng, point.coordinates.lat]);
          return this.toLineFeature(linePointsAsCooordinatesArray);
        })
      ),
      map((lineFeatures) => this.toLineFeatureCollection(lineFeatures))
    );

    this.buildMap();


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

    this.map.on('click', event => {
      const coordinates = event.lngLat;
      if (this.isFirstPoint) {
        this.store.dispatch(new GetPointElevation({
          coordinates,
          elevation: 0,
          distanceFromPreviousPoint: 0
        }));
        this.isFirstPoint = false;
      } else {
        this.store.dispatch(new GetLineToPoint({
          coordinates,
          elevation: 0,
          distanceFromPreviousPoint: 0
        }));
      }
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
