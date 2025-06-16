import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-register-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {

  users : User[]=[];
  newUser : User = {
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

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      data => {
        this.users.push(this.newUser);
        this.newUser = {
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
