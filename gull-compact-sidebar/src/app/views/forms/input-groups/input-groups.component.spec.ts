import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputGroupsComponent } from './input-groups.component';

describe('InputGroupsComponent', () => {
  let component: InputGroupsComponent;
  let fixture: ComponentFixture<InputGroupsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
