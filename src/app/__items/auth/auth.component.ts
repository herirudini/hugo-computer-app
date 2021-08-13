import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from './auth-interface';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  chooseLogin: boolean = true;
  submitted: boolean = false;
  chooseAuth(choise: string) {
    if (choise == 'login') {
      this.chooseLogin = true;
    } else {
      this.chooseLogin = false;
    }
    console.log(this.chooseLogin)
  }

  authData: AuthInterface;
  authForms: FormGroup
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authForms = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.chooseLogin) {
      this.runLogin()
    } else {
      this.runSignup()
    }
  }
  runLogin() {
    console.log('runlogin: ',this.authForms.value)
    this.authService.login(this.authForms.value)
      .then((res: any) => {
        console.log('Success: ', res)
      })
      .catch((err: any) => {
        console.log('Error: ', err)
      })
  }
  runSignup() {
    this.authService.signUp(this.authForms.value)
      .then((res: any) => {
        console.log('Success: ', res)
      })
      .catch((err: any) => {
        console.log('Error: ', err)
      })
  }
}
