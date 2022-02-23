import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionsComponent } from './accordions.component';

describe('AccordionsComponent', () => {
  let component: AccordionsComponent;
  let fixture: ComponentFixture<AccordionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
