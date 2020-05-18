import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorloginComponent } from './shopfloorlogin.component';

describe('ShopfloorloginComponent', () => {
  let component: ShopfloorloginComponent;
  let fixture: ComponentFixture<ShopfloorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfloorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfloorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
