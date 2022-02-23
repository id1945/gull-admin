import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TagInputsComponent } from './tag-inputs.component';

describe('TagInputsComponent', () => {
  let component: TagInputsComponent;
  let fixture: ComponentFixture<TagInputsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
