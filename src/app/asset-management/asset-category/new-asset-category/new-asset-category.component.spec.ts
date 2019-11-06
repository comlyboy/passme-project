import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssetCategoryComponent } from './new-asset-category.component';

describe('NewAssetCategoryComponent', () => {
  let component: NewAssetCategoryComponent;
  let fixture: ComponentFixture<NewAssetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAssetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
