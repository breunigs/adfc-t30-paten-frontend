import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { T30PatenService } from '../t30-paten.service';

@Component({
  selector: 'app-token-bestaetigung',
  templateUrl: './token-bestaetigung.component.html',
  styleUrls: ['./token-bestaetigung.component.css']
})
export class TokenBestaetigungComponent implements OnInit, OnDestroy {

  token: string;
  private sub: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: any,
    private service: T30PatenService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token'];
    });
  }
  onChancel() {
    // FIXME
    this.document.location.href = 'https://hamburg.adfc.de/laeuft/';
  }
  onSubmit() {
    this.service.submitToken(this.token).subscribe(okay => {
      if (okay) {
        this.router.navigate(['mailSend']);
      } else {
        this.router.navigate(['token', true]);
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
