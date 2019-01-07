import { Injectable } from '@angular/core';
import { T30Pate } from './t30pate';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

import { NotificationError } from './notification-error';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-T30-Frontend-Version': environment.VERSION,
    'X-T30-Frontend-Production': String(environment.production),
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class T30PatenService {
  baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) {
  }
  submitFirstPate(pate: T30Pate) {
    // FIXME statt any einen Typ angeben
    return this.http.post<any>(this.baseUrl + 'antrag-submit.php', pate, httpOptions)
     .pipe(
       map( res => {
       if (res.error) {
         throw new NotificationError(res.error);
       }
     }));
  }
  testToken(token: String) {
    return (token === 'OKAY');
  }
  submitToken(token: String) {
      if (this.testToken(token)) {
        return true;
      }
      return false;
  }
}
