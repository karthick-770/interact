import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorDataComponent } from './shopfloor-data.component';

describe('ShopfloorDataComponent', () => {
  let component: ShopfloorDataComponent;
  let fixture: ComponentFixture<ShopfloorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfloorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfloorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
