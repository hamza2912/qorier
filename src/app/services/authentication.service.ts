import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private router: Router;

  constructor(private _http: HttpClient,  router: Router) { 
    this.router = router;
  }
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  login(user): Observable<any> {
    //return this._http.post<any>('http://127.0.0.1:8000/auth/login/', user, this.options);
    return this._http.post<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/auth/login/', user, this.options);
  }

  logout(): Observable<any> {
   // return this._http.post<any>('http://127.0.0.1:8000/auth/logout/', this.options);
    return this._http.post<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/auth/logout/', this.options);
  }


  isTokenEmpty() {
    return !window.localStorage.getItem("token") ? true : false;
  }

  handleUnAuthorizeException(status) {
    if (this.isTokenEmpty() || status == 403 || status == 401) {
      this.router.navigate(['/login']);
    }
  }
}
