import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'iq-forgot-page',
  templateUrl: './forgot-page.component.html',
})
export class ForgotPageComponent implements OnInit {
  public forgotPasswordForm!: FormGroup;
  public loading: boolean = false;
  public showPassword: boolean = false;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public get email() {
    return this.forgotPasswordForm?.get('email');
  }
}
