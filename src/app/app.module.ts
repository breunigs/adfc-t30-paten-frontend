import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T30patenComponent } from './t30paten/t30paten.component';

import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule, MatSelectModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    T30patenComponent
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
      MatProgressSpinnerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: document.body.dataset.baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
