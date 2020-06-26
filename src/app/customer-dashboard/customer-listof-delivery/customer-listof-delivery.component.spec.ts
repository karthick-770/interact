import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListofDeliveryComponent } from './customer-listof-delivery.component';

describe('CustomerListofDeliveryComponent', () => {
  let component: CustomerListofDeliveryComponent;
  let fixture: ComponentFixture<CustomerListofDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListofDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListofDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
