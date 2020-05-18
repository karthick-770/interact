import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerloginFormComponent } from './customerlogin-form.component';
import { Button } from 'protractor';

describe('CustomerloginFormComponent', () => {
  let component: CustomerloginFormComponent;
  let fixture: ComponentFixture<CustomerloginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerloginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerloginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

;


