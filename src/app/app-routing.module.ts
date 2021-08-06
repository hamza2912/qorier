import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
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
      { path: 'home', component: HomeComponent },
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
