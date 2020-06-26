import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdateComponent } from './getdate.component';

describe('GetdateComponent', () => {
  let component: GetdateComponent;
  let fixture: ComponentFixture<GetdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
