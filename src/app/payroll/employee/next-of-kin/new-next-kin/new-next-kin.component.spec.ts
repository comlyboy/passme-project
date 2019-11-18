import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNextKinComponent } from './new-next-kin.component';

describe('NewNextKinComponent', () => {
  let component: NewNextKinComponent;
  let fixture: ComponentFixture<NewNextKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNextKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNextKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
