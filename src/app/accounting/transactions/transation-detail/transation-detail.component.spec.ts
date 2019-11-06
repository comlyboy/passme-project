import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationDetailComponent } from './transation-detail.component';

describe('TransationDetailComponent', () => {
  let component: TransationDetailComponent;
  let fixture: ComponentFixture<TransationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
