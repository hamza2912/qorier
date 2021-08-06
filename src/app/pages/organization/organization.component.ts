import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

import { OrganizationService } from "../../services/organization.service";
import { AuthenticationService } from "../../services/authentication.service";
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public hideTable = false;
  public hideCreateForm = true;
  public hideDetailForm = true;
  public hideEditForm = true;
  public rowData = {};
  dataSource1 = [];
  public orgform = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone_number: new FormControl(''),

  });

  /** Dynamically generated columns */
  dynamicColumns = [{
    columnDef: 'pk',
    header: 'ID',
    cell: row => row.pk,
  }, {
    columnDef: 'name',
    header: 'Name',
    cell: row => row.name,
  }];

  /** Column definitions in order */
  displayedColumns = [
    ...this.dynamicColumns.map(x => x.columnDef),
    'actions',
  ];
  showNoDataMessage: boolean = true;


  constructor(private organizationService: OrganizationService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.handleUnAuthorizeException(null);
    this.dataSource = new MatTableDataSource();
    this.hideTable = false;
    this.loadTable();
    this.showNoDataMessage = false;
    this.hideTable = false;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getDetail(rowData: any) {
    this.rowData = rowData;
    this.hideTable = true;
    this.hideDetailForm = false;

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit(rowData) {
    this.rowData = rowData;
    this.hideTable = true;
    this.hideEditForm = false;
  }

  delete(row) {
    this.organizationService.deleteOrganization(row['pk']).subscribe(res => {
      this.loadTable();
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  onSubmit() {
    this.organizationService.postOrganization(JSON.stringify(this.orgform.value)).subscribe(res => {
      this.hideCreateForm = true;
      this.clearOrgForm();
      this.loadTable();
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  public cancel() {
    this.hideCreateForm = true;
    this.hideTable = false;
    this.loadTable();
    this.clearOrgForm();
  }

  loadTable() {
    this.organizationService.getOrganizationList().subscribe(res => {
      if (res.length > 0) {
        this.dataSource.data = res;
        this.showNoDataMessage = false;
        this.hideTable = false;
      }
      else {
        this.showNoDataMessage = true;
      }

    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });

  }

  openCreateForm() {
    this.hideCreateForm = false;
    this.hideTable = true;
  }

  resetDetailView(check) {
    if (check) {
      this.hideDetailForm = true;
      this.hideTable = false;
    }
  }

  resetEditView(check) {
    if (check) {
      this.hideEditForm = true;
      this.loadTable();
    }
  }

  clearOrgForm() {
    this.orgform.reset()
  }

}
