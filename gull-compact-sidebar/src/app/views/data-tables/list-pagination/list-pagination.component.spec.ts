import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListPaginationComponent } from './list-pagination.component';

describe('ListPaginationComponent', () => {
  let component: ListPaginationComponent;
  let fixture: ComponentFixture<ListPaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
