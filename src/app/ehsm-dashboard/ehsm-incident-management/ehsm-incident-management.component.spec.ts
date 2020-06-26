import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmIncidentManagementComponent } from './ehsm-incident-management.component';

describe('EhsmIncidentManagementComponent', () => {
  let component: EhsmIncidentManagementComponent;
  let fixture: ComponentFixture<EhsmIncidentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmIncidentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmIncidentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
