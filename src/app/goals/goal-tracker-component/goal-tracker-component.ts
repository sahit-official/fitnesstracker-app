import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Goal } from '../../models/Goal';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-goal-tracker-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './goal-tracker-component.html',
  styleUrl: './goal-tracker-component.css'
})
export class GoalTrackerComponent {

  hasData = false;
  hasNoData = false;
  userId : number = 0;
  userIdTwo : number = 0
  goalsByUser : Goal[]=[];
  goals : Goal[]=[];
  newGoal : Goal = {
    targetSteps: 0,
    targetCalories: 0,
    activity: {
      steps: 0,
      distance: 0,
      caloriesBurned: 0,
      userId: 0,
      goals: [],
      date: new Date()
    }
  }

  constructor(private userService : UserService) { }

  addGoal() {
    this.userService.addGoal(this.userId, this.newGoal).subscribe(
      data => {
        data = this.newGoal;
        this.goals.push(data);
          this.newGoal = {
          targetSteps: 0,
          targetCalories: 0,
          activity: {
            steps: 0,
            distance: 0,
            caloriesBurned: 0,
            userId: 0,
            goals: [],
            date: new Date()
          }
        }
        this.userId = 0
      }
    )
  }

  getGoalsByUser() {
    this.userService.getGoalsByUser(this.userIdTwo).subscribe(
      data => {
        this.goalsByUser = data;
        this.userIdTwo = 0;

        if(this.goalsByUser.length === 0) {
          this.hasData = false;
          this.hasNoData = true;
        }
        else {
          this.hasData = true;
          this.hasNoData = false;
        }
      }
    )
  }

}
