import { Component, Inject, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../../services/authentication.service";
import { CdkScrollable } from '@angular/cdk/overlay';
import { ViewChild } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { HostListener } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-authorised-layout',
  templateUrl: './authorised-layout.component.html',
  styleUrls: ['./authorised-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthorisedLayoutComponent  implements AfterViewInit {
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  mode = 'side'
  opened = true;
  layoutGap = '69';
  fixedInViewport = true;
  public colorTransparent=true;
  public innerWidth: number = -1;

  public config: PerfectScrollbarConfigInterface = {};
  
  
  constructor( private scroller: ViewportScroller,public router: Router, private auth: AuthenticationService, public zone: NgZone) {
    
  }

  ngOnInit() {
  
   
  }



  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }
  
  ngAfterViewInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
    this.handleLayout();
    
  }

  goDown1(value) {
   let target = ''
   if(value==='why'){
    target="whyus"
   }
   if(value==='feature'){
    target="features"
   }
   if(value==='working'){
    target="working"
   }
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  }

@HostListener('window:scroll', ['$event'])
onClick(e) {
  let scrollTop=e.target.scrollingElement.scrollTop;
  if (scrollTop> 50){
    this.colorTransparent=false;
  }
  else{
    this.colorTransparent=true;
  }
}
}
