import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})


export class BannerComponent implements OnInit {
  accountForm = new FormGroup({
    full_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required)
});
error = false;
notAllowed = false;
loading = false;
submitted = false;
returnUrl: string;
allowDelete =false;
@ViewChild('whyus') whyus: ElementRef;

constructor(
    private router: Router
) { }


ngOnInit() {
  
}

get full_name() {
  return this.accountForm.get("full_name");
}
get email() {
  return this.accountForm.get("email");
}
get mobile() {
  return this.accountForm.get("mobile");
}

get company() {
  return this.accountForm.get("company");
}

public scrollToIntro() {
  this.whyus.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
}

onSave() {
    this.submitted = true;
    if (this.accountForm.invalid) {
        return;
    }
    this.loading = true;
    this.accountForm.get('email').setValue(window.localStorage.getItem("email")) 
}


showToast(message, type) {
  let caption=""
  if(type == "danger"){
     caption = "Error"
  }
  if(type == "success"){
    caption = "Success"
 }
  
}
}