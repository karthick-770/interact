import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFinancialSheetComponent } from './vendor-financial-sheet.component';

describe('VendorFinancialSheetComponent', () => {
  let component: VendorFinancialSheetComponent;
  let fixture: ComponentFixture<VendorFinancialSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorFinancialSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorFinancialSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
