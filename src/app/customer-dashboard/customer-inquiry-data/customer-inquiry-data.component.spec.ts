import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInquiryDataComponent } from './customer-inquiry-data.component';

describe('CustomerInquiryDataComponent', () => {
  let component: CustomerInquiryDataComponent;
  let fixture: ComponentFixture<CustomerInquiryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInquiryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInquiryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
