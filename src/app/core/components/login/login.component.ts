import { LoginAuthService } from 'shared/services/login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: LoginAuthService) {

   }

   login() {
     this.auth.login();
   }
  

}
