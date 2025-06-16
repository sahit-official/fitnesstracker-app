import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  passwordCorrect = false;
  passwordNotCorrect = false;
  userLogin : User = {
    userName: '',
    email: '',
    password: '',
    profile: {
      age: 0,
      height: 0,
      weight: 0
    }
  }

  constructor(private userService : UserService) { }

  login() {
    this.userService.login(this.userLogin).subscribe(
      data => {
        if(data.password === this.userLogin.password) {
          this.passwordCorrect = true;
          this.passwordNotCorrect = false;
        }
        else {
          this.passwordCorrect = false;
          this.passwordNotCorrect = true;
        }
          this.userLogin = {
            userName: '',
            email: '',
            password: '',
            profile: {
              age: 0,
              height: 0,
              weight: 0
            }
          }
      }
    )
  }

}
