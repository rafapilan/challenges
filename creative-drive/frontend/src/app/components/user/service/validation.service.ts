import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private userService: UserService) { }

  validName(name: string): boolean {
    return name.trim().length > 1
  }

  uniqueEmail(email: string): boolean {
    let unique = true
    this.userService.userData.forEach(user => {
      if (user.email === email) {
        unique = false
      }
    })
    return unique
  }

  validEmail(email: string): boolean {
    const user = email.substring(0, email.indexOf("@"));
    const mailServer = email.substring(email.indexOf("@") + 1, email.length);

    if ((email.trim().length === email.length) &&
      (user.length >= 1) &&
      (mailServer.length >= 3) &&
      (user.search("@") == -1) &&
      (mailServer.search("@") == -1) &&
      (user.search(" ") == -1) &&
      (mailServer.search(" ") == -1) &&
      (mailServer.search(".") != -1) &&
      (mailServer.indexOf(".") >= 1) &&
      (mailServer.lastIndexOf(".") < mailServer.length - 1)) {
      return true
    } else {
      return false
    }
  }

  // It would need to evaluate better for a real application.
  validCPF(cpf: string): boolean {
    let strCPF = cpf.trim().replace('.', '').replace('.', '').replace('-', '')
    let sum: number = 0
    let rest: number
    let different: boolean = false

    if (strCPF === "00000000000" || strCPF.length !== 11) {
      return false
    }
    for (let i = 0; i < 10; i++) {
      if (strCPF[i] !== strCPF[i + 1]) {
        different = true
      }
    }
    if (!different) {
      return false
    }
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
      rest = (sum * 10) % 11
    }
    if ((rest === 10) || (rest === 11)) {
      rest = 0
    }
    if (rest !== parseInt(strCPF.substring(9, 10))) {
      return false
    }
    sum = 0
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
    }
    rest = (sum * 10) % 11
    if ((rest === 10) || (rest === 11)) {
      rest = 0
    }
    if (rest !== parseInt(strCPF.substring(10, 11))) {
      return false
    }
    return true
  }

  validPassword(password: string): boolean {
    return password.length > 3
  }

  equalsPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword
  }
}
