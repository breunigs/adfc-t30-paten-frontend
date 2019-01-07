import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorNotifierService } from './error-notifier.service';
import { NotificationError } from './notification-error';

@Injectable()
export class ErrorHandleService implements ErrorHandler {

  constructor(private readonly clientNotifierService: ErrorNotifierService) {
    console.log('CREATE');
  }

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
      this.clientNotifierService.addError('Fehler im Backend');
      // throw error;
    } else if (error instanceof NotificationError) {
      this.clientNotifierService.addError(error.message);
    } else {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.message);
      this.clientNotifierService.addError('Fehler im Netzwerk');
      // throw error;
    }
  }
}
