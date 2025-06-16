import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActivityComponent } from './log-activity-component';
import { By } from '@angular/platform-browser';

describe('LogActivityComponent', () => {
  let component: LogActivityComponent;
  let fixture: ComponentFixture<LogActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind steps to newActivity.steps', async() => {
    const input = fixture.debugElement.query(By.css('input[name="steps"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    expect(component.newActivity.steps).toBe(1);
  })

  it('should call createActivity() method when submit is clicked', async() => {
    spyOn(component, 'createActivity');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.createActivity).toHaveBeenCalled();
  })

  it('should display table', () => {
    component.hasData = true;
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  })

  it('should call getAllActivitiesByUser() method when submit is clicked', async() => {
    spyOn(component, 'getAllActivitiesByUser');
    const form = fixture.debugElement.query(By.css('form[name="getActsForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.getAllActivitiesByUser).toHaveBeenCalled();
  })

});
