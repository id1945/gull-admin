import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComposeDialogComponent } from './compose-dialog.component';

describe('ComposeDialogComponent', () => {
  let component: ComposeDialogComponent;
  let fixture: ComponentFixture<ComposeDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
