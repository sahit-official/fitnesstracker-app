import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTrackerComponent } from './goal-tracker-component';
import { By } from '@angular/platform-browser';

describe('GoalTrackerComponent', () => {
  let component: GoalTrackerComponent;
  let fixture: ComponentFixture<GoalTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind targetSteps to newGoal.targetSteps', async() => {
    const input = fixture.debugElement.query(By.css('input[name="targetSteps"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    expect(component.newGoal.targetSteps).toBe(1);
  })

  it('should call addGoal() method when submit is clicked', async() => {
    spyOn(component, 'addGoal');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.addGoal).toHaveBeenCalled();
  })

  it('should display table', () => {
    component.hasData = true;
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  })

  it('should call getGoalsByUser() method when submit is clicked', async() => {
    spyOn(component, 'getGoalsByUser');
    const form = fixture.debugElement.query(By.css('form[name="getGoalsForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.getGoalsByUser).toHaveBeenCalled();
  })

});
