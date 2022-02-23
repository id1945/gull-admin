import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderSidebarLargeComponent } from './header-sidebar-large.component';

describe('HeaderSidebarLargeComponent', () => {
  let component: HeaderSidebarLargeComponent;
  let fixture: ComponentFixture<HeaderSidebarLargeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSidebarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSidebarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
