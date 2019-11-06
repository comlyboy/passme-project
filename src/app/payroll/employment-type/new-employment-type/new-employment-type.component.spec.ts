import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmploymentTypeComponent } from './new-employment-type.component';

describe('NewEmploymentTypeComponent', () => {
  let component: NewEmploymentTypeComponent;
  let fixture: ComponentFixture<NewEmploymentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmploymentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmploymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
