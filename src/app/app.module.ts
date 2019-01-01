import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PlatformRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import { YagaModule }   from '@yaga/leaflet-ng2';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule, MatSelectModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatProgressSpinnerModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T30patenComponent } from './t30paten/t30paten.component';
import { T30sozialeEinrichtungComponent } from './t30soziale-einrichtung/t30soziale-einrichtung.component';

const platform: PlatformRef = platformBrowserDynamic();

@NgModule({
  declarations: [
    AppComponent,
    T30patenComponent,
    T30sozialeEinrichtungComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatIconModule,
      MatExpansionModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      YagaModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: document.body.dataset.baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }

document.addEventListener('DOMContentLoaded', () => {
    platform.bootstrapModule(AppModule);
});
