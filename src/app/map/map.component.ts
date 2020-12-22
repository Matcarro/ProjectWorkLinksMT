import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import {GeoJsonObject} from "geojson";

@Component({

  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {

  bounds1= L.latLng(38.558, 11.579)
  bounds2= L.latLng(38.558, 11.579)
  map: L.Map
  options

  constructor(private http: HttpClient) {



  }

  ngOnInit(): void {

    //this.map=L.map("map")
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 6, minZoom: 6, attribution: '...' }),

      ],
      minZoom: 6,
      maxZoom: 6,
      zoom: 6,
      center: L.latLng(38.558, 11.579),
      maxBounds: L.latLngBounds(this.bounds1, this.bounds2)

    }
  }

  ngAfterViewInit(): void {

  }

  onMapReady(map: L.Map) {
    this.http
      .get(
      'https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson'
      )
      .subscribe((res: GeoJsonObject) => {
        L.geoJSON(res, {
        style: function (features) {
          {
            return {color: "red"}
          }
        }
        }).addTo(map);
      });
  }
}
