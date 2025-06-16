import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { RegisterComponent } from './user/register-component/register-component';
import { ProfileComponent } from './profile/profile-component/profile-component';
import { LoginComponent } from './user/login-component/login-component';
import { LogActivityComponent } from './activity/log-activity-component/log-activity-component';
import { GoalTrackerComponent } from './goals/goal-tracker-component/goal-tracker-component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'profile', component:ProfileComponent},
    {path:'log-activity', component:LogActivityComponent},
    {path:'goal-tracker', component:GoalTrackerComponent}
];
