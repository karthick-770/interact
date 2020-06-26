import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOverallSalesComponent } from './customer-overall-sales.component';

describe('CustomerOverallSalesComponent', () => {
  let component: CustomerOverallSalesComponent;
  let fixture: ComponentFixture<CustomerOverallSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOverallSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOverallSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
