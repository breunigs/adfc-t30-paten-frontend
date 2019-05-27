import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YagaModule } from '@yaga/leaflet-ng2';
import {
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatProgressSpinnerModule,
  MatTableModule, MatTabsModule, MatSnackBarModule, MatSortModule, MatPaginatorModule, MatPaginatorIntl,
  MatTooltipModule,
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
import { JwtModule } from '@auth0/angular-jwt';
import { AbmeldenAskComponent } from './abmelden-ask/abmelden-ask.component';
import { SozialeEinrichtungsKarteComponent } from './soziale-einrichtungs-karte/soziale-einrichtungs-karte.component';
import { SozialeEinrichtungsListeComponent } from './soziale-einrichtungs-liste/soziale-einrichtungs-liste.component';
import { ProfileComponent } from './profile/profile.component';
import { getGermanPaginatorIntl } from './german-paginator-intl';
import { SafePipe } from './safe.pipe';
import { SozEinrButtonsComponent } from './soz-einr-buttons/soz-einr-buttons.component';
import { T30StatusLongTextPipe } from './t30-status-long-text.pipe';
import { T30StatusShortTextPipe } from './t30-status-short-text.pipe';
import { T30StatusStarSvgUrlPipe } from './t30-status-star-svg-url.pipe';
import { SozialeEinrichtungViewComponent } from './soziale-einrichtung-view/soziale-einrichtung-view.component';
import { SozialeEinrichtungEditComponent } from './soziale-einrichtung-edit/soziale-einrichtung-edit.component';
import { SozialeEinrichtungT30FordernComponent } from './soziale-einrichtung-t30-fordern/soziale-einrichtung-t30-fordern.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    SafePipe,
    SozEinrButtonsComponent,
    T30StatusLongTextPipe,
    T30StatusShortTextPipe,
    T30StatusStarSvgUrlPipe,
    SozialeEinrichtungViewComponent,
    SozialeEinrichtungEditComponent,
    SozialeEinrichtungT30FordernComponent,
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
<<<<<<< HEAD
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'Access-Control-Allow-Credentials',
        whitelistedDomains: ['tools.adfc-hamburg.de'],
      }
    })
=======
    MatTooltipModule,
>>>>>>> nav-with-tabs
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
