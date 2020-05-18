import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmloginComponent } from './ehsmlogin.component';

describe('EhsmloginComponent', () => {
  let component: EhsmloginComponent;
  let fixture: ComponentFixture<EhsmloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
