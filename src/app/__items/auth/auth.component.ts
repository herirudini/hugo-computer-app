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
  touched = {
    email: false,
    password: false
  }
  submitted: boolean = false;
  authData: AuthInterface;
  authForms: FormGroup
  
  constructor(
    private authService: AuthService
  ) { }

  chooseAuth(choise: string) {
    if (choise == 'signIn') {
      this.chooseSignIn = true;
    } else {
      this.chooseSignIn = false;
    }
  }

  ngOnInit(): void {
    this.authForms = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.authForms.valid && this.chooseSignIn) {
      this.runSignIn();
      this.submitted = false;
      this.touched.email = false;
      this.touched.password = false;
      this.authForms.reset()
    } else if (this.authForms.valid && !this.chooseSignIn) {
      this.runSignUp();
      this.submitted = false;
      this.touched.email = false;
      this.touched.password = false
      this.authForms.reset()
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
