import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  stayConnected: boolean = true

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService  
  ) { }

  ngOnInit() {
    if (this.authenticateService.isAuthenticated) {
      this.router.navigate([''])
    }
  }

  authenticate(): void {
    this.authenticateService.login(this.email, this.password, this.stayConnected)
    this.authenticateService.isAuthenticated ?
      this.router.navigate(['users']) :
      this.authenticateService.showMessage('Email ou senha não encontrados!')
  }

  newUser(): void {
    this.router.navigate(['user'])
  }

  cancel(): void {
    this.router.navigate([''])
  }
}
