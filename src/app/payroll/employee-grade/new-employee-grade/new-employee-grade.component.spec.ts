import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeGradeComponent } from './new-employee-grade.component';

describe('NewEmployeeGradeComponent', () => {
  let component: NewEmployeeGradeComponent;
  let fixture: ComponentFixture<NewEmployeeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
