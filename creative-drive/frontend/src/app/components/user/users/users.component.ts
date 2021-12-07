import { AuthenticateService } from './../../pages/login/authenticate.service';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../get-users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: GetUsers[]
  displayedColumns = ['name', 'email', 'cpf', 'adm', 'index']
  notAdmin = {}

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit() {
    if(this.authenticateService.isAuthenticated) {
      this.notAdmin = { 
        'invisible': !this.authenticateService.loggedUser.admin
      }
      this.users = this.userService.userData ? this.userService.get() : []
    } else this.router.navigate(['login'])
  }

}
