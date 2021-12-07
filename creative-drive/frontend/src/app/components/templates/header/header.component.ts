import { User } from './../../user/user.model';
import { AuthenticateService } from './../../pages/login/authenticate.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser: User
  loggedName: string
  loggedInitials: string
  invisibleLogged = {}
  invisibleLogin = {}

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
    ) { }
    
  ngOnInit() {
    this.loggedUser = this.authenticateService.isAuthenticated ? this.authenticateService.loggedUser : null
    this.loggedName = this.authenticateService.isAuthenticated ? this.firstName(this.authenticateService.loggedUser.name) : null
    this.loggedInitials = this.authenticateService.isAuthenticated ? this.initials(this.authenticateService.loggedUser.name) : null
    this.invisibleLogged = { 'invisible': !this.authenticateService.isAuthenticated }
    this.invisibleLogin = { 'invisible': this.authenticateService.isAuthenticated }

    this.authenticateService.changeUser.subscribe((user: User) => {
      if (user){
        this.loggedUser = user
        this.loggedName = this.firstName(user.name)
        this.loggedInitials = this.initials(user.name)
        this.invisibleLogged = { 'invisible': false }
        this.invisibleLogin = { 'invisible': true }
      } else {
        this.loggedUser = null
        this.loggedName = null
        this.invisibleLogged = { 'invisible': true }
        this.invisibleLogin = { 'invisible': false }
      }
    })
  }

  firstName(name: string): string {
    const data = name.split(' ')[0].toLowerCase()
    return data.charAt(0).toUpperCase() + data.substring(1)
  }

  initials(name: string): string {
    const nameForInitials = name.split(' ')
    const initials = nameForInitials.length > 1 ? nameForInitials[0].substring(0, 1) + nameForInitials[1].substring(0, 1) : nameForInitials[0].substring(0, 2)

    return initials.toUpperCase()
  }

  goHome() {
    this.router.navigate([''])
  }

  logout() {
    this.authenticateService.logout()
    this.router.navigate(['login'])
  }

  login() {
    this.router.navigate(['login'])
  }
}
