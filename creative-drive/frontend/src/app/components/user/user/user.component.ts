import { AuthenticateService } from './../../pages/login/authenticate.service';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string
  cpf: string
  email: string
  password: string
  admin: boolean
  confirmPassword: string
  index: number = null

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticateService: AuthenticateService
  ) {
    this.route.params.subscribe(params => this.index = params['index']);
  }

  ngOnInit(): void {
    if (this.index) {
      if (this.authenticateService.isAdmin || this.userService.userData[this.index].email === this.authenticateService.loggedUser.email) {
        this.name = this.userService.userData[this.index].name
        this.cpf = this.userService.userData[this.index].cpf
        this.email = this.userService.userData[this.index].email
        this.password = this.userService.userData[this.index].password
        this.admin = this.userService.userData[this.index].admin
        this.confirmPassword = this.userService.userData[this.index].password
      } else this.router.navigate([''])
    } else {
      this.name = ''
      this.cpf = ''
      this.email = ''
      this.password = ''
      this.admin = false
      this.confirmPassword = ''
    }
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
    if (this.index) this.router.navigate(['users'])
    else this.router.navigate([''])
  }
}
