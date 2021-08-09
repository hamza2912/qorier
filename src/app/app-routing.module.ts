import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicepageComponent } from './pages/servicepage/servicepage.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: GuestLayoutComponent,
  //   children: [
  //     { path: '', component: LandingPageComponent, pathMatch: 'full'},
  //   ]
  // },
  {
    path: 'login',
    component: LoginComponent,
    children: [ ]
  },
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'services', component: ServicepageComponent },
    ]
  },
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
