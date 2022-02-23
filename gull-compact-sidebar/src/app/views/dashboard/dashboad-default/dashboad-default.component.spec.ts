import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboadDefaultComponent } from './dashboad-default.component';

describe('DashboadDefaultComponent', () => {
  let component: DashboadDefaultComponent;
  let fixture: ComponentFixture<DashboadDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
