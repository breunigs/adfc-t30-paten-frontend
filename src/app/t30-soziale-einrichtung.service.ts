import { Injectable } from '@angular/core';
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
export class T30SozialeEinrichtungService {
  baseUrl = environment.API_BASE_URL;

  constructor(
    private http: HttpClient
  ) { }
  getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  get(id) {
    return this.http.get<any>(this.baseUrl + 'soz-einr-get.php?id=' + id, httpOptions)
      .pipe(
        map(res => {
          console.log('res', res);
          if (res.error) {
            throw new NotificationError(res.error);
          }
          res.tempo30 = this.getRandomInt(0, 5);
          return res;
        }));
  }
  list() {
    return this.http.get<any>(this.baseUrl + 'soz-einr-list.php', httpOptions)
      .pipe(
        map(res => {
          console.log('res', res);
          for (const item of res) {
            item.tempo30 = this.getRandomInt(0, 5);
          }
          if (res.error) {
            throw new NotificationError(res.error);
          }
          return res;
        }));
  }
}
