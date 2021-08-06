import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  getUserList(): Observable<any> {
    //return this._http.get<any>('http://127.0.0.1:8000/users/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/users/');
  }

  postUser(user): Observable<any> {
    //return this._http.post<any>('http://127.0.0.1:8000/users/', user, this.options);
    return this._http.post<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/users/', user, this.options);
  }

  patchUser(user, id): Observable<any> {
    //return this._http.patch<any>('http://127.0.0.1:8000/users/'+id+'/', user, this.options);
    return this._http.patch<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/users/'+id+'/', user, this.options);
  }

  deleteUser(id): Observable<any> {
    //return this._http.delete<any>('http://127.0.0.1:8000/users/'+id+'/');
    return this._http.delete<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/users/'+id+'/');
  }

  getUserDetail(id): Observable<any> {
    //return this._http.get<any>('http://127.0.0.1:8000/users/'+id+'/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/users/'+id+'/');
  }

  
}
