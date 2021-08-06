import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrganizationService } from "../../../services/organization.service";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Output() resetDetailView = new EventEmitter<boolean>();
  @Input() rowData: any;
  check: boolean = true;
  public orgform = new FormGroup({
    name: new FormControl('',),
    address: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    manager: new FormControl(''),
    manager_email: new FormControl(''),
  });
  constructor(public router: Router, private organizationService: OrganizationService, private auth: AuthenticationService) { }
  onChange(rowData) {
    console.log(rowData);
  }

  ngOnInit(): void {
    this.auth.handleUnAuthorizeException(null);
    this.loadInfo(this.rowData['pk'])
  }

  loadInfo(pk) {
    this.organizationService.getOrganizationDetail(pk).subscribe(res => {
      this.organizationService.getOrganizationMembersList(pk).subscribe(orgMemberRes => {
        this.orgform.get('name').setValue(res['name']);
        this.orgform.get('address').setValue(res['address']);
        this.orgform.get('email').setValue(res['email']);
        this.orgform.get('phone_number').setValue(res['phone_number']);
        this.orgform.get('manager').setValue(orgMemberRes[0]['user']['username']);
        this.orgform.get('manager_email').setValue(orgMemberRes[0]['user']['email']);
      }, error => {
        this.auth.handleUnAuthorizeException(error.status);
      });
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }

  public back() {

    this.resetDetailView.emit(true);
  }
}
