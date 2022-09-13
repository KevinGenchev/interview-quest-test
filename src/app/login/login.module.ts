import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ForgotPageComponent } from './components/forgot-page/forgot-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoginPageComponent,
    ForgotPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
})
export class LoginModule {}
