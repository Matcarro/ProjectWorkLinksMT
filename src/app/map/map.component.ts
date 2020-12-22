import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {

  bounds1= L.latLng(35, 12)
  bounds2= L.latLng(35, 12)

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}



  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: L.latLng(35, 12),
    maxBounds: L.latLngBounds(this.bounds1, this.bounds2)
  };





}
