import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadFileComponentComponent } from './upload-file-component/upload-file-component.component';
import { FormDataComponentComponent } from './form-data-component/form-data-component.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponentComponent,
    FormDataComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
