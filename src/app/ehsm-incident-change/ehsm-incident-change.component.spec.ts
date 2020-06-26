import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmIncidentChangeComponent } from './ehsm-incident-change.component';

describe('EhsmIncidentChangeComponent', () => {
  let component: EhsmIncidentChangeComponent;
  let fixture: ComponentFixture<EhsmIncidentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmIncidentChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmIncidentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
