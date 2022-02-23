import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatLeftSidebarComponent } from './chat-left-sidebar.component';

describe('ChatLeftSidebarComponent', () => {
  let component: ChatLeftSidebarComponent;
  let fixture: ComponentFixture<ChatLeftSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
