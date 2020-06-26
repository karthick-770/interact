import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileEditComponent } from './vendor-profile-edit.component';

describe('VendorProfileEditComponent', () => {
  let component: VendorProfileEditComponent;
  let fixture: ComponentFixture<VendorProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
