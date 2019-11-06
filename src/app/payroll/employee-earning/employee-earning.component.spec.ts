import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEarningComponent } from './employee-earning.component';

describe('EmployeeEarningComponent', () => {
  let component: EmployeeEarningComponent;
  let fixture: ComponentFixture<EmployeeEarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
