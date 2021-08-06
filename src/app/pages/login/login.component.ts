import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from "../../services/authentication.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
    error = false;
    notAllowed = false;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authenticationService.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('organization_id');
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(JSON.stringify(this.loginForm.value))
            .subscribe(
                resp => {
                    if (resp["user"]["role"] == 1) {
                        window.localStorage.setItem("token", "Token "+resp["token"]);
                        window.localStorage.setItem("userRole", "admin");
                        this.router.navigate(['/dashboard']);
                    }
                    else if (resp["user"]["organization_member"]["role"] == 1) {
                        window.localStorage.setItem("token", "Token "+resp["token"]);
                        window.localStorage.setItem("userRole", "manager");
                        window.localStorage.setItem("organization_id",resp["user"]["organization_member"]['organization']["pk"] );
                        this.router.navigate(['/dashboard']);

                    } else {
                        this.notAllowed = true;
                    }
                },
                error => {
               
                    this.error = true;
                    this.loading = false;
                });
    }
}
