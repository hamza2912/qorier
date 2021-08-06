import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public roles = [{ key: 1, value: "Admin" }, { key: 0, value: "User" }];
  public org_roles = [{ key: 0, value: "Employee" }, { key: 1, value: "Manager" }];
  @Output() resetDetailView = new EventEmitter<boolean>();
  @Input() rowData: any;
  check: boolean = true;
  public userform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    organization_role: new FormControl(''),
    organization_id: new FormControl(''),
    organization: new FormControl(''),
    pk: new FormControl()
  });
  constructor(public router: Router,  private userService: UserService, private auth: AuthenticationService) { }
  onChange(rowData) {
    console.log(rowData);
  }

  ngOnInit(): void {
    this.auth.handleUnAuthorizeException(null);
    this.loadInfo(this.rowData['pk'])
  }
  
  loadInfo(pk) {
    this.userService.getUserDetail(pk).subscribe(res => {
      this.roles.forEach(element => {
        if(element.key == res['role']){
          this.userform.get('role').setValue(element.value)
        }
      });
      if(res['organization_member'] != null){
        this.org_roles.forEach(element => {
          if(element.key == res['organization_member']['role']){
            this.userform.get('organization_role').setValue(element.value)
          }
        });
        this.userform.get('organization_id').setValue(res['organization_member']['organization']['pk'])
        this.userform.get('organization').setValue(res['organization_member']['organization']['name'])
      }
      
      this.userform.get('pk').setValue(res['pk'])
      this.userform.get('username').setValue(res['username'])
      this.userform.get('email').setValue(res['email'])
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }

  public back() {

    this.resetDetailView.emit(true);
  }
}
