import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../../../services/user.service";
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class UserEditComponent implements OnInit {
  public roles = [{ key: 1, value: "Admin" }, { key: 0, value: "User" }];
  public org_roles = [{ key: 0, value: "Employee" }, { key: 1, value: "Manager" }];
  public userNameError = false;
  public userEmailError = false;
  public userRoleError = false;
  public selectedRole= false;
  @Output() resetEditView = new EventEmitter<boolean>();
  @Input() rowData: any;
  public userform = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    role: new FormControl(0, Validators.required),
    organization_role: new FormControl(0, Validators.required),
    organization_id: new FormControl(),
    pk: new FormControl()
  });

  constructor(public router: Router, private userService: UserService, private auth: AuthenticationService) {

  }

  onChange(rowData) {
    console.log(rowData);
  }

  ngOnInit(): void {
    if(window.localStorage.getItem("userRole")=="admin"){
      this.selectedRole=true;
    }
    this.auth.handleUnAuthorizeException(null);
    this.loadInfo(this.rowData['pk']);

  }

  loadInfo(pk) {
    this.userService.getUserDetail(pk).subscribe(res => {
      this.userform.get('pk').setValue(res['pk'])
      this.userform.get('organization_id').setValue(res['organization_member']['organization']['pk'])
      this.userform.get('username').setValue(res['username'])
      this.userform.get('email').setValue(res['email'])
      this.userform.get('role').setValue(res['role'])
      this.userform.get('organization_role').setValue(res['organization_member']['role'])
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }
  onSubmit() {
    this.userService.patchUser(JSON.stringify(this.userform.value), this.userform.value['pk']).subscribe(res => {
      this.resetEditView.emit(true);
      this.userNameError = false;
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
      if (error.error['username']) {
        this.userNameError = true;
      }
      if (error.error['email']) {
        this.userEmailError = true;
      }
      if (error.error['manager']) {
        this.userRoleError = true;
      }
      
    });
  }

  public back() {
    this.resetEditView.emit(true);
  }



}
