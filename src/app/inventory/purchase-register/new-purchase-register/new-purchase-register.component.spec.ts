import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPurchaseRegisterComponent } from './new-purchase-register.component';

describe('NewPurchaseRegisterComponent', () => {
  let component: NewPurchaseRegisterComponent;
  let fixture: ComponentFixture<NewPurchaseRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPurchaseRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPurchaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
