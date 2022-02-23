import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomizerComponent } from './customizer.component';

describe('CustomizerComponent', () => {
  let component: CustomizerComponent;
  let fixture: ComponentFixture<CustomizerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
