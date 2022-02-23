import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderSidebarCompactComponent } from './header-sidebar-compact.component';

describe('HeaderSidebarCompactComponent', () => {
  let component: HeaderSidebarCompactComponent;
  let fixture: ComponentFixture<HeaderSidebarCompactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSidebarCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSidebarCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
