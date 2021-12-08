import { ValidationService } from './../service/validation.service';
import { AuthenticateService } from './../../pages/login/authenticate.service';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title: string
  name: string
  cpf: string
  email: string
  password: string
  admin: boolean
  confirmPassword: string
  index: number = null
  deleteUser: boolean = false
  deleteAll: boolean = false
  disabledEmail: boolean = false
  disabledAdmin: boolean = false
  invisibleSave = {}
  invisibleDelete = {}

  constructor(
    private userService: UserService,
    private validationService: ValidationService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticateService: AuthenticateService
  ) {
    this.route.params.subscribe(params => {
      this.deleteAll = params['index'] === 'all' ? true : false
      this.index = params['index'] === 'all' ? null : params['index']
      this.deleteUser = params['delete'] ? true : false
    });
  }

  ngOnInit(): void {
    if (this.index) {
      if (this.authenticateService.isAdmin || this.userService.userData[this.index].email === this.authenticateService.loggedUser.email) {
        this.title = 'Alterar Usuário:'
        this.name = this.userService.userData[this.index].name
        this.cpf = this.userService.userData[this.index].cpf
        this.email = this.userService.userData[this.index].email
        this.password = this.userService.userData[this.index].password
        this.admin = this.userService.userData[this.index].admin
        this.confirmPassword = this.userService.userData[this.index].password
        this.disabledEmail = true
        this.disabledAdmin = this.authenticateService.isAdmin ? false : true
        if (this.deleteUser) {
          if (this.authenticateService.isAdmin) {
            this.title = 'Excluir Usuário?'
            this.disabledAdmin = true
          } else this.router.navigate(['users'])
        }
      } else this.router.navigate([''])
    } else {
      if (!this.authenticateService.isAuthenticated || this.authenticateService.isAdmin) {
        this.title = 'Inserir novo usuário:'
        this.name = ''
        this.cpf = ''
        this.email = ''
        this.password = ''
        this.admin = false
        this.confirmPassword = ''
      } else this.router.navigate(['users'])
    }
    if(this.deleteAll){
      if (this.authenticateService.isAdmin) {
        this.title = 'Exluir todos os usuários?'
        this.name = 'Exceto o usuário logado enquanto permanecer na página!'
        this.disabledEmail = true
        this.disabledAdmin = true
      } else this.router.navigate(['users'])
    }
    this.invisibleSave = { 'invisible': this.deleteUser }
    this.invisibleDelete = { 'invisible': !this.deleteUser }
  }

  save(): void {

    if (this.index) {
      this.userService.update(this.index, this.name, this.cpf, this.email, this.password, this.admin)
      this.userService.showMessage('Usuário alterado com sucesso!')
    } else {
      this.userService.create(this.name, this.cpf, this.email, this.password, this.admin)
      this.userService.showMessage('Usuário incluído com sucesso!')
    }
    this.router.navigate(['users'])
  }

  cancel(): void {
    // if (this.authenticateService.isAuthenticated) this.router.navigate(['users'])
    // else this.router.navigate([''])
    console.log(this.validationService.validCPF(this.cpf))
  }

  delete(): void {
    this.deleteAll ? this.userService.reset() : this.userService.delete(this.index)
    this.router.navigate(['users'])
  }
}
