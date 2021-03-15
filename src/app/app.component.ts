import { Component } from '@angular/core';
import { LatLng } from './map-component/latLng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mTask';

latLng :LatLng;

  onMapClick(event){
this.latLng = event;
  }
}
