import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
chooseLogin: boolean = true;

chooseAuth(choise: string){
  if (choise == 'login') {
    this.chooseLogin = true;
  } else {
    this.chooseLogin = false;
  }
  console.log(this.chooseLogin)
}
  constructor() { }

  ngOnInit(): void {
  }

}
