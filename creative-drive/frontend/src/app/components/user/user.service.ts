import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  loggedUser: User

  userData: User[] = [{
    name: 'Administrador Inicial',
    cpf: '000.000.000-00',
    email: 'admin@admin.com',
    password: '123',
    admin: true
  }, {
    name: 'Rafael',
    cpf: '111.111.111-11',
    email: 'rafael@admin.com',
    password: '123',
    admin: true
  }, {
    name: 'Lucas',
    cpf: '222.222.222-22',
    email: 'lucas@admin.com',
    password: '123',
    admin: false
  }, {
    name: 'Maria',
    cpf: '333.333.333-33',
    email: 'maria@admin.com',
    password: '123',
    admin: false
  }]

  constructor(private snackBar: MatSnackBar) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(name: string, cpf: string, email: string, password: string, admin: boolean) {
    const data = { name, cpf, email, password, admin }
    this.userData.push(data)
  }

  update(index: number, name: string, cpf: string, email: string, password: string, admin: boolean) {
    const data = { name, cpf, email, password, admin }
    this.userData.splice(index, 1, data)
  }

  delete(index: number) {
    this.userData.splice(index, 1)
  }
};