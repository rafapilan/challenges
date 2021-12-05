import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/pages/login/login.component'
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }, {
    path: "user",
    component: UserComponent
  }, {
    path: "user/:index",
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}