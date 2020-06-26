import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPaymentOverdueComponent } from './vendor-payment-overdue.component';

describe('VendorPaymentOverdueComponent', () => {
  let component: VendorPaymentOverdueComponent;
  let fixture: ComponentFixture<VendorPaymentOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPaymentOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPaymentOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
