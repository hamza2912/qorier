import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private _http: HttpClient) { }
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  getOrganizationList(): Observable<any> {
   // return this._http.get<any>('http://127.0.0.1:8000/organization/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/');

  }

  postOrganization(organization): Observable<any> {
   // return this._http.post<any>('http://127.0.0.1:8000/organization/', organization, this.options);
    return this._http.post<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/', organization, this.options);
  }

  patchOrganization(organization, id): Observable<any> {
    //return this._http.patch<any>('http://127.0.0.1:8000/organization/'+id+'/', organization, this.options);
    return this._http.patch<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/'+id+'/', organization, this.options);
  }

  deleteOrganization(id): Observable<any> {
    //return this._http.delete<any>('http://127.0.0.1:8000/organization/'+id+'/');
    return this._http.delete<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/'+id+'/');
  }

  getOrganizationDetail(id): Observable<any> {
    //return this._http.get<any>('http://127.0.0.1:8000/organization/'+id+'/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/'+id+'/');
  }

  getOrganizationMembersList(id): Observable<any> {
    //return this._http.get<any>('http://127.0.0.1:8000/organization/'+id+'/organizationMembers/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/'+id+'/organizationMembers/');

  }

  getOrganizationIdList(): Observable<any> {
    //return this._http.get<any>('http://localhost:8000/organization/organizationIds/');
    return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/organization/organizationIds/');

  }
}
