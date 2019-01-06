import { Injectable } from '@angular/core';
import { T30Pate } from './t30pate';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-T30-Frontend-Version': environment.VERSION,
    'X-T30-Frontend-Production': environment.production,
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class T30PatenService {
  baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
  }
  submitFirstPate(pate: T30Pate) {
    return this.http.post<T30Pate>(this.baseUrl + 'antrag-submit.php', pate, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
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
