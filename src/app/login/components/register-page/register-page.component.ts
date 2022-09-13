import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  passwordStrengthValidator,
  sameValueAsFactory,
} from '../../../shared/validation';

@Component({
  selector: 'iq-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;
  public killSubscription = new Subject();
  public loading: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  serverMessage: string | undefined;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          passwordStrengthValidator(),
        ],
      ],
      passwordConfirm: [
        '',
        [
          Validators.required,
          sameValueAsFactory(() => this.password, this.killSubscription),
        ],
      ],
    });
  }

  public get username() {
    return this.registerForm?.get('username');
  }

  public get email() {
    return this.registerForm?.get('email');
  }
  public get password() {
    return this.registerForm?.get('password');
  }

  public get passwordConfirm() {
    return this.registerForm?.get('passwordConfirm');
  }

  public get passwordDoesMatch(): boolean {
    return this.password?.value === this.passwordConfirm?.value;
  }
}
