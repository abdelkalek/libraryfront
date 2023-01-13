import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SigninWithHeaderFooterComponent,
    SignupWithHeaderFooterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
