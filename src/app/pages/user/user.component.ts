import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { AuthenticationService } from "../../services/authentication.service";
import { OrganizationService } from 'src/app/services/organization.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  public selectedRole= false;
  public selectedList= false;
  selected: any = 23;
  public roles = [{ key: 1, value: "Admin" }, { key: 0, value: "User" }];
  
  public org_roles = [{ key: 0, value: "Employee" }, { key: 1, value: "Manager" }];
  public org_list = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public hideTable = false;
  public hideCreateForm = true;
  public hideDetailForm = true;
  public hideEditForm = true;
  public rowData = {};
  public userNameError = false;
  public userEmailError = false;
  public userRoleError = false;
  dataSource1 = [];
  public userform = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    role: new FormControl(0, Validators.required),
    organization_role: new FormControl(0, Validators.required),
    organization_id: new FormControl(0, Validators.required),
    pk: new FormControl()
  });

  /** Dynamically generated columns */
  dynamicColumns = [{
    columnDef: 'pk',
    header: 'ID',
    cell: row => row.pk,
  }, {
    columnDef: 'username',
    header: 'Name',
    cell: row => row.username,
  }];

  /** Column definitions in order */
  displayedColumns = [
    ...this.dynamicColumns.map(x => x.columnDef),
    'actions',
  ];
  showNoDataMessage: boolean = true;


  constructor(private userService: UserService, private auth: AuthenticationService, private organizationService: OrganizationService) { }

  ngOnInit() {
    this.loadOrganizationIdsList();
    this.auth.handleUnAuthorizeException(null);
    this.dataSource = new MatTableDataSource();
    this.hideTable = false;
    this.loadTable();
    if(window.localStorage.getItem("userRole")=="admin"){
      this.selectedRole=true;
    }
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
    this.userService.deleteUser(row['pk']).subscribe(res => {
      this.loadTable();
    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  onSubmit() {
    if(window.localStorage.getItem("userRole")!="admin"){
      this.userform.get('role').setValue(0);
      this.userform.get('organization_id').setValue(window.localStorage.getItem("organization_id"));
    }
   
    this.userService.postUser(JSON.stringify(this.userform.value)).subscribe(res => {
      this.hideCreateForm = true;
      this.clearuserform();
      this.loadTable();
    }, error => {
      this.userNameError = false;
      this.userEmailError = false;
      this.userRoleError = false;
      if (error.error['username']) {
        this.userNameError = true;
      }
      if (error.error['email']) {
        this.userEmailError = true;
      }
      if (error.error['manager']) {
        this.userRoleError = true;
      }
      this.auth.handleUnAuthorizeException(error.status);
    });
  }

  public cancel() {
    this.hideCreateForm = true;
    this.hideTable = false;
    this.loadTable();
    this.clearuserform();
    this.userNameError = false;
    this.userEmailError = false;
    this.userRoleError = false;
  }

  loadTable() {
    this.userService.getUserList().subscribe(res => {
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

  clearuserform() {
    this.userform.reset();
    this.  loadOrganizationIdsList();
  }

  loadOrganizationIdsList(){
    this.organizationService.getOrganizationIdList().subscribe(res => {
      this.org_list = [];
      if (res.length > 0) {
        res.forEach(element => {
          this.org_list.push({key: element.pk, value: element.name})
        });
      }
      else {
        this.showNoDataMessage = true;
      }

    }, error => {
      this.auth.handleUnAuthorizeException(error.status);
    });
  }
}

