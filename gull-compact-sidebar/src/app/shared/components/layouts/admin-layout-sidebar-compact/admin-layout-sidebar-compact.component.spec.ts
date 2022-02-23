import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminLayoutSidebarCompactComponent } from './admin-layout-sidebar-compact.component';

describe('AdminLayoutSidebarCompactComponent', () => {
  let component: AdminLayoutSidebarCompactComponent;
  let fixture: ComponentFixture<AdminLayoutSidebarCompactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutSidebarCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutSidebarCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
