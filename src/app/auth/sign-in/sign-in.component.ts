import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {AuthService} from "./auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user";
const UserApp = 'userApp';
const Token = 'token';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,   public router: Router) { }
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })
  ngOnInit(): void {
  }

  submit() {
    console.log(this.LoginForm.getRawValue())
    this.authService.login(this.LoginForm.getRawValue()).subscribe({
      next:(res)=>{
        console.log(res)
        this.authService.userAuth.next(res)
        console.log(this.authService.userAuth.subscribe({next:(rs)=>{
            console.log("User App",res)
          }}))
        this.router.navigate(['./dashboard/default']);
        window.sessionStorage.removeItem(UserApp);
        window.sessionStorage.setItem(UserApp, res.email);
        window.sessionStorage.removeItem(Token);
        window.sessionStorage.setItem(Token, res.token);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
