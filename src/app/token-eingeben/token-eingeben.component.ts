import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-eingeben',
  templateUrl: './token-eingeben.component.html',
  styleUrls: ['./token-eingeben.component.css']
})
export class TokenEingebenComponent implements OnInit, OnDestroy {

  tokenForm = this.fb.group({
    token: ['', Validators.required],
  });
  fehler = false;
  private sub: any;
  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.fehler = (params['fehler'] === 'true');
      });
      console.log('x');
  }

  onSubmit() {
      const token = this.tokenForm.get('token').value;
      if (token === 'OKAY') {
        this.router.navigate(['submitToken', this.tokenForm.get('token').value]);
      } else {
        this.fehler = true;
      }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
