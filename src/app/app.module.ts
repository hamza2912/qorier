import { BrowserModule } from '@angular/platform-browser';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
//import { HighchartsChartComponent } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { GuestTopNavComponent } from './layout/guest/guest-top-nav/guest-top-nav.component';
import { GuestFooterComponent } from './layout/guest/guest-footer/guest-footer.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthorisedTopNavComponent } from './layout/authorised/authorised-top-nav/authorised-top-nav.component';
import { AuthorisedSideNavTogglerComponent } from './layout/authorised/authorised-side-nav-toggler/authorised-side-nav-toggler.component';
import { HighchartsChartModule } from "highcharts-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { DrillDownBarChartsComponent } from './pages/drill-down-bar-charts/drill-down-bar-charts.component';
import { DrillDownPieChartsComponent } from './pages/drill-down-pie-charts/drill-down-pie-charts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { OrganizationComponent } from './pages/organization/organization.component';
import { DetailComponent } from './pages/organization/detail/detail.component';
import { UserDetailComponent } from './pages/user/detail/detail.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/organization/edit/edit.component';
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user/edit/edit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './pages/login/login.component';
import {InventoInterceptor} from './interceptors/invento-interceptor';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkScrollable } from '@angular/cdk/overlay';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { BannerComponent } from './pages/banner/banner.component';
import { InformationComponent } from './pages/information/information.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { FeaturesComponent } from './pages/features/features.component';
import { WorkingComponent } from './pages/working/working.component';
import { AccuracyComponent } from './pages/accuracy/accuracy.component';
import { FullfilmentComponent } from './pages/fullfilment/fullfilment.component';
import { CloudDashboardComponent } from './pages/cloud-dashboard/cloud-dashboard.component';
import { FooterComponent } from './pages/footer/footer.component';
import { WhatYouGetComponent } from './pages/what-you-get/what-you-get.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicepageComponent } from './pages/servicepage/servicepage.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};
@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    GuestTopNavComponent,
    GuestFooterComponent,
    GuestLayoutComponent,
    LandingPageComponent,
    AuthorisedSideNavComponent,
    AuthorisedLayoutComponent,
    DashboardComponent,

    //HighchartsChartComponent,
    AuthorisedTopNavComponent,
    AuthorisedSideNavTogglerComponent,
    DrillDownBarChartsComponent,
    DrillDownPieChartsComponent,
    OrganizationComponent,
    DetailComponent,
    EditComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    InformationComponent,
    WhyUsComponent,
    FeaturesComponent,
    WorkingComponent,
    AccuracyComponent,
    FullfilmentComponent,
    CloudDashboardComponent,
    FooterComponent,
    WhatYouGetComponent,
    AboutComponent,
    ContactComponent,
    ServicepageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    OverlayModule,
    CdkScrollableModule,
    ScrollingModule,
    AppRoutingModule,
    HighchartsChartModule,
    NgbModule,
    PerfectScrollbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSelectModule,
    MatSortModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatMenuModule 
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
      { provide: HTTP_INTERCEPTORS, useClass: InventoInterceptor, multi: true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
