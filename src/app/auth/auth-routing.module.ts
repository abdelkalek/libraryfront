import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: 'Sign In'
        }
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          title: 'Sign Up'
        }
      },
      {
        path: 'signin-with-header-footer',
        component: SigninWithHeaderFooterComponent,
        data: {
          title: 'SignIn With Header Footer'
        }
      },
      {
        path: 'signup-with-header-footer',
        component: SignupWithHeaderFooterComponent,
        data: {
          title: 'SignUp With Header Footer'
        }
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
