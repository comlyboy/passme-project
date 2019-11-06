import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeDeductionComponent } from './new-employee-deduction.component';

describe('NewEmployeeDeductionComponent', () => {
  let component: NewEmployeeDeductionComponent;
  let fixture: ComponentFixture<NewEmployeeDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
