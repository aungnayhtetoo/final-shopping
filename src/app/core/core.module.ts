import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarBootstrapComponent } from './components/nav-bar-bootstrap/nav-bar-bootstrap.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatComponentModule } from '../module/mat-components.module';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBarBootstrapComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,    
    RouterModule.forChild([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
    ]),
  ],
  exports: [
    NavBarBootstrapComponent,
  ]
})
export class CoreModule { }
