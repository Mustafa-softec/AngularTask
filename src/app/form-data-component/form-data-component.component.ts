import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data-component',
  templateUrl: './form-data-component.component.html',
  styleUrls: ['./form-data-component.component.css']
})
export class FormDataComponentComponent implements OnInit {

  constructor() { }

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
])
    });
  }


  grades: string[] = ["Very good","good", "bad","ballass"]

  dataForm : FormGroup;

}
