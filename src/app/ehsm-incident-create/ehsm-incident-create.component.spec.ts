import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmIncidentCreateComponent } from './ehsm-incident-create.component';

describe('EhsmIncidentCreateComponent', () => {
  let component: EhsmIncidentCreateComponent;
  let fixture: ComponentFixture<EhsmIncidentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmIncidentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmIncidentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
