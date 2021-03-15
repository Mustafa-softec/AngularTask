import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LatLng } from '../map-component/latLng';

@Component({
  selector: 'app-form-data-component',
  templateUrl: './form-data-component.component.html',
  styleUrls: ['./form-data-component.component.css']
})
export class FormDataComponentComponent implements OnInit,OnChanges {

  constructor() { }

  @Input() latLng: LatLng;

  ngOnChanges(): void {
    console.log(this.latLng.lat.toString());
  }
  ngOnInit(): void {
    this.dataForm = new FormGroup({
name: new FormGroup({
  firstName: new FormControl('',Validators.required),
  middleName : new FormControl(),
  lastName : new FormControl()
}),
code : new FormControl('',[
  Validators.required,
  Validators.minLength(4)
]),
pickupLat: new FormControl(),
pickupLng:new FormControl(),
dropoffLat:new FormControl(),
dropoffLng:new FormControl()
    });
  }


  grades: string[] = ["Very good","good", "bad","ballass"]

  dataForm : FormGroup;

  onPickPickup(event){
this.dataForm.patchValue({
  pickupLat : this.latLng.lat,
  pickupLng : this.latLng.lng,
})
  }

  onPickDropOff(event){
    this.dataForm.patchValue({
      dropoffLat : this.latLng.lat,
      dropoffLng : this.latLng.lng,
    })
      }
}
