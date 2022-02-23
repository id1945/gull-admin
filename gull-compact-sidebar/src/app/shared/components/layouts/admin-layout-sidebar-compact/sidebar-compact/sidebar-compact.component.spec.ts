import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarCompactComponent } from './sidebar-compact.component';

describe('SidebarCompactComponent', () => {
  let component: SidebarCompactComponent;
  let fixture: ComponentFixture<SidebarCompactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
