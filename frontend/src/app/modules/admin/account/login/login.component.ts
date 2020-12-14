import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/common/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  resetForm = new FormGroup({
    email: new FormControl(''),
  });
  submitted = false;
  returnUrl?: string;
  error?: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin';

    document.querySelector('#bootstrap-ar').remove();
    document.querySelector('#bootstrap-en').remove();
  }
  // tslint:disable-next-line: typedef
  get f() {
    console.log(this.loginForm.controls);
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      // tslint:disable-next-line: variable-name
      .subscribe(
        (_data) => {
          this.error = '';
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
