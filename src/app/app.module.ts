import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadFileComponentComponent } from './upload-file-component/upload-file-component.component';
import { FormDataComponentComponent } from './form-data-component/form-data-component.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MapComponentComponent } from './map-component/map-component.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponentComponent,
    FormDataComponentComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8Y53lojH7RkCC3vH_nGmmEv0XUpZI10M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
