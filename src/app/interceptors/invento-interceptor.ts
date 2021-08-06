import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { LoginService } from "../services/login.service";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class InventoInterceptor implements HttpInterceptor {
  constructor(private auth: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var headers = {};
    if (window.localStorage.getItem("token")) {
      headers = {
        Authorization: window.localStorage.getItem("token")
      };
    }
    req = req.clone({
      setHeaders: headers
    });
    // req.headers.append("Access-Control-Allow-Origin", "*");
    return next.handle(req);
  }

}
