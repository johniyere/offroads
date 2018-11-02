import { Component, OnInit } from '@angular/core';
import { MapService } from './shared/map.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'ofr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    this.map = new Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-74.50, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }

}
