import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  public authService: AuthService,
                public router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 return this.authService.userAuth.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          console.log("IS lOGIN")

          return true;
        }
        console.log("nOT lOGIN ")
        return this.router.createUrlTree(['/auth/sign-in']);
      }));

  }

}
