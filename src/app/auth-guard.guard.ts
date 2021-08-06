import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./services/authentication.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivateChild {
  private router: Router;
    private activatedRoute : ActivatedRoute;


    constructor(private auth:AuthenticationService, router: Router, public route:ActivatedRoute){
        this.router = router;
        this.activatedRoute= route;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
        if(state.url == "/"){
            this.auth.handleUnAuthorizeException(null);
            this.router.navigate(['/dashboard']);
        }
        return true;
    }
}
