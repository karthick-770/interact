import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanenceloginComponent } from './maintanencelogin.component';

describe('MaintanenceloginComponent', () => {
  let component: MaintanenceloginComponent;
  let fixture: ComponentFixture<MaintanenceloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintanenceloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintanenceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
