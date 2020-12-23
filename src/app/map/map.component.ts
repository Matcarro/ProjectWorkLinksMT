import { Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { GeoJsonObject } from 'geojson';
import { forkJoin } from 'rxjs';

@Component({

  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: L.Map;

  bounds1 = L.latLng(42, 13);
  bounds2 = L.latLng(42, 12);
  options;
  public resGeojson: any;
  public resJson: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 5.5,
          minZoom: 5,
          attribution: '...',
        }),
      ],
      zoom: 5,
      center: L.latLng(42, 13),
      maxBounds: L.latLngBounds(this.bounds1, this.bounds2),
    };
  };


  onMapReady(map: L.Map) {

    //get dei due database
    let character = this.http.get<GeoJsonObject>('http://localhost:3000/regione');
    let characterHomeworld = this.http.get<GeoJsonObject>('https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson');


    //Merge dei due database
    forkJoin([character, characterHomeworld]).subscribe(results => {
      // results[0] db esterno
      // results[1] db
      console.log(results[0])
      function controlNumber(positive){

        if(positive<=500){
          return {color: "black",fillColor: "yellow",fillOpacity: 1,opacity:1,weight:0.75};
        }
        if(positive>500&&positive<=10000){
          return {color: "black",fillColor: "orange",fillOpacity: 1,opacity:1,weight:0.75};
        }
        if(positive>10000){
          return {color: "black",fillColor: "red",fillOpacity: 1,opacity:1,weight:0.75};
        }
      }


      L.geoJSON(results[1],
        {style: function(features) {

          switch ((features.properties.reg_istat_code_num-1) as number) {

            case 0: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 1: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 2: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 3: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 4: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 5: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 6: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 7: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 8: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 9: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 10: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 11: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 12: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 13: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 14: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 15: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 16: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 17: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 18: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
            case 19: return controlNumber(results[0][features.properties.reg_istat_code_num-1].positive);
         }
    //   },
    //   onEachfeatures : function(features,layer) {
    //     onEachfeatures(features, layer, results[0][features.properties.reg_istat_code_num-1].positive)
    //   }
    // },

        }
  }).addTo(map);



        });

      }
    }
