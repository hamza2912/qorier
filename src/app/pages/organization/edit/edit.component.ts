import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrganizationService } from "../../../services/organization.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() resetEditView = new EventEmitter<boolean>();
  @Input() rowData: any;
  public orgform = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone_number: new FormControl(''),
    pk: new FormControl()
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
      this.orgform.setValue(res);
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }
  onSubmit() {
    this.organizationService.patchOrganization(JSON.stringify(this.orgform.value), this.orgform.value['pk']).subscribe(res => {
      // this.orgform.setValue(res);
      this.resetEditView.emit(true);
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }

  public back() {
    this.resetEditView.emit(true);
  }



}

