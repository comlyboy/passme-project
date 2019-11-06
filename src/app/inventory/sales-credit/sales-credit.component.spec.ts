import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCreditComponent } from './sales-credit.component';

describe('SalesCreditComponent', () => {
  let component: SalesCreditComponent;
  let fixture: ComponentFixture<SalesCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
