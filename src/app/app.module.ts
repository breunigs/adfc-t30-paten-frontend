import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YagaModule } from '@yaga/leaflet-ng2';
import {
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatProgressSpinnerModule,
  MatTableModule, MatTabsModule, MatSnackBarModule, MatSortModule, MatPaginatorModule, MatPaginatorIntl
} from '@angular/material';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T30patenComponent } from './t30paten/t30paten.component';
import { T30sozialeEinrichtungComponent } from './t30soziale-einrichtung/t30soziale-einrichtung.component';
import { TokenEingebenComponent } from './token-eingeben/token-eingeben.component';
import { TokenBestaetigungComponent } from './token-bestaetigung/token-bestaetigung.component';
import { EmailVersandComponent } from './email-versand/email-versand.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandleService } from './error-handle.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AbmeldenAskComponent } from './abmelden-ask/abmelden-ask.component';
import { SozialeEinrichtungsKarteComponent } from './soziale-einrichtungs-karte/soziale-einrichtungs-karte.component';
import { SozialeEinrichtungsListeComponent } from './soziale-einrichtungs-liste/soziale-einrichtungs-liste.component';
import { ProfileComponent } from './profile/profile.component';
import { getGermanPaginatorIntl } from './german-paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    T30patenComponent,
    T30sozialeEinrichtungComponent,
    TokenEingebenComponent,
    TokenBestaetigungComponent,
    EmailVersandComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AbmeldenAskComponent,
    SozialeEinrichtungsKarteComponent,
    SozialeEinrichtungsListeComponent,
    ProfileComponent,
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
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    YagaModule,
    HttpClientModule,
  ],
  providers: [
    ErrorHandleService,
    { provide: ErrorHandler, useClass: ErrorHandleService },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MatPaginatorIntl, useValue: getGermanPaginatorIntl() }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
