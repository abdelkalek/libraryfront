import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {User} from './user';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = environment.endPoint;
  userAuth = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  login(loginForm) {
    return this.http.post<User>('https://localhost:7282/Login', loginForm);
  }

  logout() {
    this.userAuth.next(null);
    localStorage.removeItem('userApp')
    localStorage.removeItem('token')
    this.router.navigate(['auth/sign-in']);
  }

  GetToken() {
    let t ;
     this.userAuth.subscribe({
       next:(res) => {
         if(res !=null){
           t = res.token
         }
       }
     }) ;
     return 'Bearer ' + t ;
  }
}
