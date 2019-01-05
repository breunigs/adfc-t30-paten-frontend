import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-token-bestaetigung',
  templateUrl: './token-bestaetigung.component.html',
  styleUrls: ['./token-bestaetigung.component.css']
})
export class TokenBestaetigungComponent implements OnInit, OnDestroy {

  token: string;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: any) {
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
    // FIXME checkToken via API Call if successfull:
    if (this.token === 'OKAY') {
       this.router.navigate(['mailSend']);
    } else {
      // FIXME
      this.router.navigate(['token', true]);
    }

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
