import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeEarningComponent } from './new-employee-earning.component';

describe('NewEmployeeEarningComponent', () => {
  let component: NewEmployeeEarningComponent;
  let fixture: ComponentFixture<NewEmployeeEarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeEarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
