import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRepayedComponent } from './loan-repayed.component';

describe('LoanRepayedComponent', () => {
  let component: LoanRepayedComponent;
  let fixture: ComponentFixture<LoanRepayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRepayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRepayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
