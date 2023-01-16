import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./sign-in/auth.service";

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  constructor(private inject:Injector) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/auth/sign-in')) {
      return next.handle(request);
    }

   let authservice=this.inject.get(AuthService);
    let tokenReq = request.clone({
      setHeaders: {
        Authorization:  authservice.GetToken()
      }
    });
    return next.handle(tokenReq);

  }
}
