import { LocalStorageService } from './../../local-storage.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../user.model';
import { GetUsers } from './../get-users.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  loggedUser: User
  userData: User[]

  constructor(
    private snackBar: MatSnackBar,
    private localStorageService: LocalStorageService
    ) {
      this.userData = localStorageService.get('userData') ? localStorageService.get('userData') : []
    }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  get(filter?: string, value?: string): GetUsers[] {
    const data = []
    this.userData.forEach((user: User, i: number) => {
      data.push({ index: i, adm: (user.admin ? 'task_alt' : 'radio_button_unchecked'), ...user })
    })
    if (value){
      if(filter === 'name') {
        return data.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
      } else {
        if (filter === 'email') {
          return data.filter(user => user.email.toLowerCase().includes(value.toLowerCase()))
        } else {
          if (filter === 'cpf') {
            return data.filter(user => user.cpf.toLowerCase().includes(value.toLowerCase()))
          }else {
            return data.filter(user => user.name.toLowerCase().includes(value.toLowerCase()) ||
              user.email.toLowerCase().includes(value.toLowerCase()) ||
              user.cpf.toLowerCase().includes(value.toLowerCase()))
          }
        }
      }  
    } else {
      return data
    }
  }

  create(name: string, cpf: string, email: string, password: string, admin: boolean): void {
    const data = { name, cpf, email, password, admin }
    this.userData.push(data)
    this.localStorageService.set('userData', this.userData)
  }

  update(index: number, name: string, cpf: string, email: string, password: string, admin: boolean) {
    const data = { name, cpf, email, password, admin }
    this.userData.splice(index, 1, data)
    this.localStorageService.set('userData', this.userData)
  }

  delete(index: number) {
    this.userData.splice(index, 1)
    this.localStorageService.set('userData', this.userData)
  }
  
  reset() {
    this.userData = [this.loggedUser]
    this.localStorageService.remove('userData')
  }
};