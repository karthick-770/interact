import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitycheckDataComponent } from './qualitycheck-data.component';

describe('QualitycheckDataComponent', () => {
  let component: QualitycheckDataComponent;
  let fixture: ComponentFixture<QualitycheckDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitycheckDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitycheckDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
