import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { MatSnackBar } from '@angular/material';

import { ErrorNotifierService } from './error-notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ADFC Tempo 30 vor sozialen Einrichtungen';
  public version: string = environment.VERSION;
  sub: any;
  constructor(private snackBar: MatSnackBar, private errorService: ErrorNotifierService) {
  }
  ngOnInit() {
    this.sub = this.errorService.messages.subscribe(e => {
      console.log('Fehler empfangen:', e);
      this.snackBar.open(e, 'Okay');
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
