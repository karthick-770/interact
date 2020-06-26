import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmRiskAssestmentComponent } from './ehsm-risk-assestment.component';

describe('EhsmRiskAssestmentComponent', () => {
  let component: EhsmRiskAssestmentComponent;
  let fixture: ComponentFixture<EhsmRiskAssestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmRiskAssestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmRiskAssestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
