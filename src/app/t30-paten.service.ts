 import { Injectable } from '@angular/core';
import { T30Pate } from './t30pate';

@Injectable({
  providedIn: 'root'
})
export class T30PatenService {

  constructor() { }

  submitFirstPate(pate: T30Pate) {
    console.log(pate);
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
