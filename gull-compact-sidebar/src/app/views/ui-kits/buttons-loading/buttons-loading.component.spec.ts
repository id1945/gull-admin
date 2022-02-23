import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonsLoadingComponent } from './buttons-loading.component';

describe('ButtonsLoadingComponent', () => {
  let component: ButtonsLoadingComponent;
  let fixture: ComponentFixture<ButtonsLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
