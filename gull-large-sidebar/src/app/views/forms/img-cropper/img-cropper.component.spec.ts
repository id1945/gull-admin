import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImgCropperComponent } from './img-cropper.component';

describe('ImgCropperComponent', () => {
  let component: ImgCropperComponent;
  let fixture: ComponentFixture<ImgCropperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
