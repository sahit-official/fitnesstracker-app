import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register-component';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should bind userName to newUser.userName', async() => {
    const input = fixture.debugElement.query(By.css('input[name="userName"]')).nativeElement;
    input.value="test";
    input.dispatchEvent(new Event('input'));
    expect(component.newUser.userName).toBe("test");
  })

  it('should call createUser() method when submit is clicked', async() => {
    spyOn(component, 'createUser');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.createUser).toHaveBeenCalled();
  })

});
