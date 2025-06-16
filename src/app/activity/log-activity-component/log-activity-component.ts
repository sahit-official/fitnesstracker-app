import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../models/Activity';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-log-activity-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './log-activity-component.html',
  styleUrl: './log-activity-component.css'
})
export class LogActivityComponent {

  activities : Activity[]=[];
  newActivity : Activity = {
    steps: 0,
    distance: 0,
    caloriesBurned: 0,
    userId: 0,
    goals: [],
    date: new Date()
  }
  activitiesByUser : Activity[]=[];
  userId : number = 0;
  hasData = false;
  hasNoData = false;

  constructor(private userService : UserService) {

  }

  createActivity() {
    this.userService.createActivity(this.newActivity).subscribe(
      data => {
        this.activities.push(this.newActivity);
          this.newActivity = {
            steps: 0,
            distance: 0,
            caloriesBurned: 0,
            userId: 0,
            goals: [],
            date: new Date()
          }
      }
    )
  }

  getAllActivitiesByUser() {
    this.userService.getAllActivitiesByUser(this.userId).subscribe(
      data => {
        this.activitiesByUser = data;
        if(this.activitiesByUser.length > 0) {
          this.hasData = true;
          this.hasNoData = false;
        }
        else {
          this.hasData = false; 
          this.hasNoData = true;
        }
      }
    )
  }

}
