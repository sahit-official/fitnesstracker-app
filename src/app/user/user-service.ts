import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Activity } from '../models/Activity';
import { Goal } from '../models/Goal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "http://localhost:2001/api/users";
  private activityUrl = "http://localhost:2002/api/activity";

  constructor(private http:HttpClient) { }

  createUser(user : User) {
    return this.http.post<User>(`${this.userUrl}/register`, user);
  }

  login(user : User) {
    return this.http.get<User>(`${this.userUrl}/${user.id}`);
  }

  getProfileByUserId(userId : number) {
    return this.http.get<Profile>(`${this.userUrl}/profile/${userId}`);
  }

  updateProfile(userId : number, updatedProfile : Profile) {
    return this.http.put<Profile>(`${this.userUrl}/profile/${userId}`, updatedProfile);
  }

  createActivity(activity : Activity) {
    return this.http.post<Activity>(`${this.activityUrl}/activities`, activity)
  }

  getAllActivitiesByUser(userId : number) {
    return this.http.get<Activity[]>(`${this.activityUrl}/user/${userId}`);
  }

  addGoal(userId : number, goal : Goal) {
    return this.http.post<Goal>(`${this.activityUrl}/goals/${userId}`, goal);
  }

  getGoalsByUser(userId : number) {
    return this.http.get<Goal[]>(`${this.activityUrl}/goals/user/${userId}`);
  }

}
