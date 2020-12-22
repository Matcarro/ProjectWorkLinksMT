import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {

  bounds1= L.latLng(38.558, 11.579)
  bounds2= L.latLng(38.558, 11.579)

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}



  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 6, minZoom: 6, attribution: '...' })
    ],
    minZoom: 6,
    maxZoom: 6,
    zoom: 6,
    center: L.latLng(38.558, 11.579),
    maxBounds: L.latLngBounds(this.bounds1, this.bounds2)
  };





}
