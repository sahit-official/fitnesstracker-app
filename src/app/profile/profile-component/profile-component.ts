import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-profile-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css'
})
export class ProfileComponent {
  userId : number = 0;
  profileById? : Profile;
  updatedProfile : Profile = {
    age: 0,
    height: 0,
    weight: 0
  }

  constructor(private userService : UserService) { }

  getProfileByUserId() {
    this.userService.getProfileByUserId(this.userId).subscribe(
      data => {
        this.profileById = data;
      }
    )
  }

  updateProfile(id : string) {
    this.userService.updateProfile(parseInt(id), this.updatedProfile).subscribe(
      data => {
        this.updatedProfile = {
          age: 0,
          height: 0,
          weight: 0
        }
      }
    )
  }

}
