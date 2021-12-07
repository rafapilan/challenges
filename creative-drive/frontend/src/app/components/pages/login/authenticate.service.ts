import { User } from './../../user/user.model';
import { UserService } from './../../user/user.service';
import { LocalStorageService } from './../../local-storage.service';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  changeUser = new EventEmitter<User>()

  loggedUser: User
  
  isAuthenticated: boolean
  isAdmin: boolean = false

  constructor(
    private snackBar: MatSnackBar,
    private localStorageService: LocalStorageService,
    private userService: UserService
    ) {
    this.loggedUser = localStorageService.get('loggedUser') ? localStorageService.get('loggedUser') : null
    this.isAuthenticated = this.loggedUser ? true : false
    this.isAdmin = this.loggedUser ? this.loggedUser.admin : false
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 10000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  login(email: string, password: string, stayConnected: boolean): void {
    if (this.userService.userData) {
      this.userService.userData.forEach((user: User) => {
        if (user.email === email && user.password === password) {
          this.loggedUser = user
          this.isAuthenticated = true
          this.isAdmin = user.admin
          if (stayConnected)
            this.localStorageService.set('loggedUser', this.loggedUser)
          this.changeUser.emit(user)
          return
        }
      }) 
    }
  }

  logout(): void {
    this.localStorageService.remove('loggedUser')
    this.loggedUser = null
    this.isAuthenticated = false
    this.isAdmin = false
    this.changeUser.emit(null)
  }
}
