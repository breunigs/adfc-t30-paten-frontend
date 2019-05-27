import { Injectable } from '@angular/core';
import { T30Pate } from './t30pate';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

import { NotificationError } from './notification-error';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-T30-Frontend-Version': environment.VERSION,
    'X-T30-Frontend-Production': String(environment.production),
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class T30PatenService {
  baseUrl = environment.API_STUB_BASE_URL;

  constructor(private http: HttpClient) {
  }
  loadPatenschaft(id: number) {
    return this.http.get<any>(this.baseUrl + 'pate-load.php?id=' + id, httpOptions)
      .pipe(
        map(res => {
          console.log('res', res);
          if (res.error) {
            throw new NotificationError(res.error);
          }
          return res;
        }));
  }
  savePatenschaft(pate: T30Pate) {
    // FIXME statt any einen Typ angeben
    return this.http.post<any>(this.baseUrl + 'pate-save.php', pate, httpOptions)
      .pipe(
        map(res => {
          if (res.error) {
            throw new NotificationError(res.error);
          }
        }));
  }
  list() {
    return this.http.get<any>(this.baseUrl + 'pate-list.php', httpOptions)
      .pipe(
        map(res => {
          console.log('res', res);
          if (res.error) {
            throw new NotificationError(res.error);
          }
          return res;
        }));
  }
  testToken(token: String) {
    return this.http.get<any>(this.baseUrl + 'test-token.php?token=' + token, httpOptions)
      .pipe(
        map(res => {
          if (res.error) {
            throw new NotificationError(res.error);
          }
        }));
  }
  submitToken(token: String) {
    return this.http.get<any>(this.baseUrl + 'submit-token.php?token=' + token, httpOptions)
      .pipe(
        map(res => {
          if (res.error) {
            throw new NotificationError(res.error);
          }
          return res['ok'] === 1;
        }));
  }
}
