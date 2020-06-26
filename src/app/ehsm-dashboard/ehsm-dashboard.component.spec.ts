import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmDashboardComponent } from './ehsm-dashboard.component';

describe('EhsmDashboardComponent', () => {
  let component: EhsmDashboardComponent;
  let fixture: ComponentFixture<EhsmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
