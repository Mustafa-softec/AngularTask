import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { LatLng } from './latLng';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {

  constructor() { }

latLng : LatLng;

  ngOnInit(): void {
    this.latLng = new LatLng();
    this.latLng.lat = this.lat;
    this.latLng.lng = this.lng;
    this.mapClick.emit(this.latLng);
  }
  title = '';
   lat = 51.678418;
  lng = 7.809007;

  @Output() mapClick: EventEmitter<LatLng> = new EventEmitter<LatLng>()

  onMapClick(event)
  {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    
    this.latLng.lat = event.coords.lat;
    this.latLng.lng = event.coords.lng;

    this.mapClick.emit(this.latLng);
  }

 
}
