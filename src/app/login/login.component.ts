import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {  ErrorHandleService } from '../error-handle.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private errorHandleService: ErrorHandleService,
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            passwordResend: [ false ]
        });
        this.loginForm.get('passwordResend').valueChanges.subscribe(val => {
            if (val) {
              this.loginForm.get('password').disable();
            } else {
              this.loginForm.get('password').enable();
            }
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        console.log('xx');
        if (this.loginForm.get('passwordResend').value) {
          this.errorHandleService.handleError('Not implemented yet.');
          this.loading = false;
        } else {
        this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.errorHandleService.handleError(error);
                    this.loading = false;
                });
              }
    }
}
