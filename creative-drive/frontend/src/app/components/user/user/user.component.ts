import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = ''
  cpf: string = ''
  email: string = ''
  password: string = ''
  admin: false
  confirmPassword: string = ''
  index: number = null

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.index = params['index']);
  }

  ngOnInit(): void {

  }

  save(): void {
    if (this.index) {
      this.userService.update(this.index, this.name, this.cpf, this.email, this.password, this.admin)
      this.userService.showMessage('Usuário alterado com sucesso!')
      console.log(this.userService.userData)
    } else {
      this.userService.create(this.name, this.cpf, this.email, this.password, this.admin)
      this.userService.showMessage('Usuário incluído com sucesso!')
      console.log(this.userService.userData)
    }
  }

  cancel(): void {
    this.router.navigate([''])
  }
}
