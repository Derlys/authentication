import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {LoginComponent} from './components/login/login.component'
import {LogoutComponent} from './components/logout/logout.component'
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  {
    path:'', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path: "dashboard", component: DashboardComponent
  },{
    path: "login", component: LoginComponent
  },{
    path: "logout", component: LogoutComponent
  },{
    path: "register", component: RegisterComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
