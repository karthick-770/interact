import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmDataComponent } from './ehsm-data.component';

describe('EhsmDataComponent', () => {
  let component: EhsmDataComponent;
  let fixture: ComponentFixture<EhsmDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
