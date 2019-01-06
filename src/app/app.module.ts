import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PlatformRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import { YagaModule } from '@yaga/leaflet-ng2';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatProgressSpinnerModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T30patenComponent } from './t30paten/t30paten.component';
import { T30sozialeEinrichtungComponent } from './t30soziale-einrichtung/t30soziale-einrichtung.component';
import { TokenEingebenComponent } from './token-eingeben/token-eingeben.component';
import { TokenBestaetigungComponent } from './token-bestaetigung/token-bestaetigung.component';
import { EmailVersandComponent } from './email-versand/email-versand.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const platform: PlatformRef = platformBrowserDynamic();

@NgModule({
  declarations: [
    AppComponent,
    T30patenComponent,
    T30sozialeEinrichtungComponent,
    TokenEingebenComponent,
    TokenBestaetigungComponent,
    EmailVersandComponent
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
  providers: [
    {provide: APP_BASE_HREF, useValue: document.body.dataset.baseUrl},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

document.addEventListener('DOMContentLoaded', () => {
    platform.bootstrapModule(AppModule);
});

platformBrowserDynamic().bootstrapModule(AppModule).catch((err: any) => console.error(err));
