import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalBalanceComponent } from './journal-balance.component';

describe('JournalBalanceComponent', () => {
  let component: JournalBalanceComponent;
  let fixture: ComponentFixture<JournalBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
