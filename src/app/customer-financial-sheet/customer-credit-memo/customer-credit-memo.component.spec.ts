import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditMemoComponent } from './customer-credit-memo.component';

describe('CustomerCreditMemoComponent', () => {
  let component: CustomerCreditMemoComponent;
  let fixture: ComponentFixture<CustomerCreditMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
