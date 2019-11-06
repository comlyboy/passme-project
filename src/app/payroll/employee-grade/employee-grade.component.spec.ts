import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGradeComponent } from './employee-grade.component';

describe('EmployeeGradeComponent', () => {
  let component: EmployeeGradeComponent;
  let fixture: ComponentFixture<EmployeeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
