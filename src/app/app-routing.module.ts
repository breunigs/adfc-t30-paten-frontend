import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenEingebenComponent } from './token-eingeben/token-eingeben.component';
import { TokenBestaetigungComponent } from './token-bestaetigung/token-bestaetigung.component';
import { EmailVersandComponent } from './email-versand/email-versand.component';
import { T30patenComponent } from './t30paten/t30paten.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
}, {
  path: 'paten',
  component: T30patenComponent,
}, {
  path: 'token/:fehler',
  component: TokenEingebenComponent
}, {
  path: 'submitToken/:token',
  component: TokenBestaetigungComponent,
}, {
  path: 'mailSend',
  component: EmailVersandComponent,
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  // otherwise redirect to home
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
