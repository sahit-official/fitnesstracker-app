import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login-component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind id to userLogin.id', async() => {
    const input = fixture.debugElement.query(By.css('input[name="id"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    expect(component.userLogin.id).toBe(1);
  })

  it('should call login() method when submit is clicked', async() => {
    spyOn(component, 'login');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.login).toHaveBeenCalled();
  })

});
