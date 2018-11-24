import { Component, OnInit } from '@angular/core';
import { MapService } from './shared/map.service';
import { Map } from 'mapbox-gl';
import { FeatureCollection, GeoJson, Line, WayPoint } from './shared/map';

@Component({
  selector: 'ofr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  points = new FeatureCollection([]);

  line: number[][] = [];

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
            'line-width': 8
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

      this.mapService.getMapTerrainData(event.lngLat)
        .subscribe((data) => {
          console.log(data);
        });
      const coordinates = event.lngLat.toArray();
      const point = new WayPoint(coordinates);
      console.log(point);
      this.points.features.push(point);
      (this.map.getSource('point') as any).setData(this.points);

      this.line.push(coordinates);
      const feature = new Line(this.line);
      (this.map.getSource('route') as any).setData(feature);
    });
  }

  drawGeojsonLine() {
    this.map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': [
                  [-122.48369693756104, 37.83381888486939],
                  [-122.48348236083984, 37.83317489144141],
                  [-122.48339653015138, 37.83270036637107],
                  [-122.48356819152832, 37.832056363179625],
                  [-122.48404026031496, 37.83114119107971],
                  [-122.48404026031496, 37.83049717427869],
                  [-122.48348236083984, 37.829920943955045],
                  [-122.48356819152832, 37.82954808664175],
                  [-122.48507022857666, 37.82944639795659],
                  [-122.48610019683838, 37.82880236636284],
                  [-122.48695850372314, 37.82931081282506],
                  [-122.48700141906738, 37.83080223556934],
                  [-122.48751640319824, 37.83168351665737],
                  [-122.48803138732912, 37.832158048267786],
                  [-122.48888969421387, 37.83297152392784],
                  [-122.48987674713133, 37.83263257682617],
                  [-122.49043464660643, 37.832937629287755],
                  [-122.49125003814696, 37.832429207817725],
                  [-122.49163627624512, 37.832564787218985],
                  [-122.49223709106445, 37.83337825839438],
                  [-122.49378204345702, 37.83368330777276]
              ]
            }
          }
        },
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
  }

}
