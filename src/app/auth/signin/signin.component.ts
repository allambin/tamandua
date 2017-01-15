import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'tam-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  public onSubmit() {
    this.authService.login(this.signinForm.value.email, this.signinForm.value.password)
      .subscribe(
        result => {
          if(result) {
              this.router.navigate(['']);
          } else {
              this.errorMessage = "An error occurred.";
          }
        },
        error => {
          this.errorMessage = error.message;
        }
      );
  }

}
