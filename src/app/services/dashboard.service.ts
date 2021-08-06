import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private _http: HttpClient) { }

    getDashBoard( ): Observable<any>{
        //return this._http.get<any>('http://127.0.0.1:8000/admin_dashboard/');
        return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/admin_dashboard/');
    }
   
    getSubSystemCharts( year ): Observable<any>{
      //return this._http.get<any>('http://localhost:8000/admin_tracking_chart/'+ year+"/");
      return this._http.get<any>('http://tbarcodeprod3.eba-3apnw2be.us-west-2.elasticbeanstalk.com/admin_tracking_chart/'+ year+"/");
    }


}








