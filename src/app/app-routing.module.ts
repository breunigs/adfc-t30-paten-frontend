import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenEingebenComponent } from './token-eingeben/token-eingeben.component';
import { TokenBestaetigungComponent } from './token-bestaetigung/token-bestaetigung.component';
import { EmailVersandComponent } from './email-versand/email-versand.component';
import { T30patenComponent } from './t30paten/t30paten.component';

const routes: Routes = [{
  path: '',
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
