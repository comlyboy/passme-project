import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGenderComponent } from './new-gender.component';

describe('NewGenderComponent', () => {
  let component: NewGenderComponent;
  let fixture: ComponentFixture<NewGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
