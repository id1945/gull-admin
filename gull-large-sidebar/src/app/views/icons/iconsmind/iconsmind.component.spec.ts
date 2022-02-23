import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconsmindComponent } from './iconsmind.component';

describe('IconsmindComponent', () => {
  let component: IconsmindComponent;
  let fixture: ComponentFixture<IconsmindComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsmindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsmindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
