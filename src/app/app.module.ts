import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [

    MapComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'ModificaInfetti', component: MapComponent },
      { path: '**', component: MapComponent },
    ])


  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
