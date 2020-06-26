import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesOrderComponent } from './customer-sales-order.component';

describe('CustomerSalesOrderComponent', () => {
  let component: CustomerSalesOrderComponent;
  let fixture: ComponentFixture<CustomerSalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSalesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
