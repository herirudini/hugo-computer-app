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
  chooseSignIn: boolean = true;
  submitted: boolean = false;
  chooseAuth(choise: string) {
    if (choise == 'signIn') {
      this.chooseSignIn = true;
    } else {
      this.chooseSignIn = false;
    }
    console.log(this.chooseSignIn)
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
    if (this.chooseSignIn) {
      this.runSignIn();
      this.submitted = false;
    } else {
      this.runSignUp();
      this.submitted = false;
    }
  }
  runSignIn() {
    console.log('runSignIn: ',this.authForms.value)
    this.authService.signIn(this.authForms.value)
      .then((res: any) => {
        console.log('Success: ', res)
      })
      .catch((err: any) => {
        console.log('Error: ', err)
      })
  }
  runSignUp() {
    console.log('runSignUp: ',this.authForms.value)

    this.authService.signUp(this.authForms.value)
      .then((res: any) => {
        console.log('Success: ', res)
      })
      .catch((err: any) => {
        console.log('Error: ', err)
      })
  }
}
