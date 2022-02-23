import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardV4Component } from './dashboard-v4.component';

describe('DashboardV4Component', () => {
  let component: DashboardV4Component;
  let fixture: ComponentFixture<DashboardV4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
