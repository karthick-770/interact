import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitycheckloginComponent } from './qualitychecklogin.component';

describe('QualitycheckloginComponent', () => {
  let component: QualitycheckloginComponent;
  let fixture: ComponentFixture<QualitycheckloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitycheckloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitycheckloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
