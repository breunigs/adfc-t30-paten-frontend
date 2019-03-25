import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    baseUrl = environment.API_BASE_URL;

    public currentUser: User;

    constructor(
      private http: HttpClient,
      private router: Router,
    ) {
        const o = localStorage.getItem('currentUser');
        let obj = null;
        if (o) {
         if (o !== '[object Object]') {
          obj  = JSON.parse(o);
          }
        }
        this.currentUser = obj;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.baseUrl + 'auth-users.php', { username, password })
            .pipe(map(user => {
                console.log('x-login', user);
                // login successful if there's a jwt token in the response
                if (user && user.sessionId) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUser = user;
                }
                return user;
            }));
    }
    passwordReset(username: string) {
      return this.http.post<any>(this.baseUrl + 'pw-reset.php', { username });
    }
    getCurrentUser() {
      return this.currentUser;
    }
    getSessionId() {
      return this.currentUser.sessionId;
    }
    logout() {
        if (this.currentUser) {
          const params = new HttpParams().set('sessionId', this.currentUser.sessionId);
          this.http.get<any>(this.baseUrl + 'logout.php', { params: params }).subscribe(results => {
            console.log(results);
          });
        }
        // remove user from local storage to log user out
        localStorage.getItem('currentUser');
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
