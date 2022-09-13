import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'iq-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  public loading: boolean = false;
  public showPassword: boolean = false;

  serverMessage: string | undefined;
  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', []],
    });
  }

  public get email() {
    return this.loginForm?.get('email');
  }

  public get password() {
    return this.loginForm?.get('password');
  }
}
