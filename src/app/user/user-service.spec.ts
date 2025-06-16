import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Activity } from '../models/Activity';
import { Goal } from '../models/Goal';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const userUrl = "http://localhost:2001/api/users";
  const activityUrl = "http://localhost:2002/api/activity";

  const testProfile: Profile = {
    id: 1,
    age: 34,
    height: 190,
    weight: 3487
  }
  const testUser : User = {
    id: 1,
    userName: 'u1',
    email: 'e1',
    password: '12',
    profile: testProfile
  }

    const testActivity: Activity = {
    steps: 1,
    distance: 1,
    caloriesBurned: 1,
    userId: 1,
    goals: [],
    date: new Date(2007, 12, 1)
  }

  const testGoal : Goal = {
    targetSteps: 0,
    targetCalories: 0,
    activity : testActivity
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create user', () => {
    service.createUser(testUser).subscribe(
      res => {
        expect(res).toEqual(testUser);
      }
    )
    const req = httpMock.expectOne(`${userUrl}/register`);
    req.flush(testUser);
  })

  it('should log in with correct details', () => {
    service.login(testUser).subscribe(
      res => {
        expect(res).toEqual(testUser);
      }
    )
    const req = httpMock.expectOne(`${userUrl}/${testUser.id}`)
    req.flush(testUser);
  })

  it('should get profile by user id', () => {
    const userId = 1;
    service.getProfileByUserId(userId).subscribe(
      res => {
        expect(res).toEqual(testProfile);
      }
    )
  })

  it('should update profile', () => {
    const newProfile : Profile = {
      age: 34,
      height: 190,
      weight: 3487
    }
    service.updateProfile(1, newProfile).subscribe(
      res => {
        expect(res.age).toEqual(testUser.profile.age);
        expect(res.height).toEqual(testProfile.height);
        expect(res.weight).toEqual(testProfile.weight);
      }
    )
    const req = httpMock.expectOne(`${userUrl}/profile/${testUser.id}`)
    req.flush(newProfile);
  })

  it('should create an activity', () => {
    service.createActivity(testActivity).subscribe(
      res => {
        expect(res).toEqual(testActivity);
      }
    )
    const req = httpMock.expectOne(`${activityUrl}/activities`);
    req.flush(testActivity);
  })

  it('should get all activities by user', () =>  {
    const userId = 1;
    const activities = [testActivity];
    service.getAllActivitiesByUser(userId).subscribe(
      res => {
        expect(res.length).toEqual(1);
        expect(res).toEqual(activities);
      }
    )
    const req = httpMock.expectOne(`${activityUrl}/user/${userId}`);
    req.flush(activities);
  })

  it('should add a goal', () => {
    const userId = 1;
    service.addGoal(userId, testGoal).subscribe(
      res => {
        expect(res).toEqual(testGoal);
      }
    )
    const req = httpMock.expectOne(`${activityUrl}/goals/${userId}`);
    req.flush(testGoal);
  })

    it('should get all goals by user', () =>  {
    const userId = 1;
    const goals = [testGoal];
    service.getGoalsByUser(userId).subscribe(
      res => {
        expect(res.length).toEqual(1);
        expect(res).toEqual(goals);
      }
    )
    const req = httpMock.expectOne(`${activityUrl}/goals/user/${userId}`);
    req.flush(goals);
  })

});
