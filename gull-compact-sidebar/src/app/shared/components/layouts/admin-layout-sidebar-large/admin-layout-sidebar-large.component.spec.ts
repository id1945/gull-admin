import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large.component';

describe('AdminLayoutSidebarLargeComponent', () => {
  let component: AdminLayoutSidebarLargeComponent;
  let fixture: ComponentFixture<AdminLayoutSidebarLargeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutSidebarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutSidebarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
