import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatherIconComponent } from './feather-icon.component';

describe('FeatherIconComponent', () => {
  let component: FeatherIconComponent;
  let fixture: ComponentFixture<FeatherIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatherIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
