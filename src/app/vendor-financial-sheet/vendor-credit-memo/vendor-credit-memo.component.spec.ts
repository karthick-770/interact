import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCreditMemoComponent } from './vendor-credit-memo.component';

describe('VendorCreditMemoComponent', () => {
  let component: VendorCreditMemoComponent;
  let fixture: ComponentFixture<VendorCreditMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCreditMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCreditMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
