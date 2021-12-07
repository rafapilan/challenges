import { UsersComponent } from './components/user/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component'
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "login",
    component: LoginComponent
  }, {
    path: "user",
    component: UserComponent
  }, {
    path: "user/:index",
    component: UserComponent
  }, {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}