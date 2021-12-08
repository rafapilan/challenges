import { AuthenticateService } from './../../pages/login/authenticate.service';
import { UserService } from './../service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../get-users.model';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: GetUsers[]
  displayedColumns = ['name', 'email', 'cpf', 'adm', 'index']
  notAdmin = {}
  filterOption = null
  filterValue = ''

  options: Option[] = [
    {value: null, viewValue: 'Todos'},
    {value: 'name', viewValue: 'Nome'},
    {value: 'email', viewValue: 'Email'},
    {value: 'cpf', viewValue: 'CPF'}
  ];

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
      this.users = this.userService.userData ? this.userService.get(this.filterOption, this.filterValue) : []
    } else this.router.navigate(['login'])
  }

  filter(e) {
    if (e)
      this.filterValue = e
    this.ngOnInit()
  }

  clear() {
    this.filterOption = null
    this.filterValue = ''
    this.ngOnInit()
  }
}
