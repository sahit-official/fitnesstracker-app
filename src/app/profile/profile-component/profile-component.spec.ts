import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile-component';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind userId to component.userId', async() => {
    const input = fixture.debugElement.query(By.css('input[name="userId"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    expect(component.userId).toBe(1);
  })

  it('should call getProfileByUserId() method when submit is clicked', async() => {
    spyOn(component, 'getProfileByUserId');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.getProfileByUserId).toHaveBeenCalled();
  })

  it('should bind age to updatedProfile.age', async() => {
    const input = fixture.debugElement.query(By.css('input[name="age"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    expect(component.updatedProfile.age).toBe(1);
  })

  it('should call updateProfile() method when submit is clicked', async() => {
    spyOn(component, 'updateProfile');
    const form = fixture.debugElement.query(By.css('form[name="updateForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.updateProfile).toHaveBeenCalled();
  })

});
