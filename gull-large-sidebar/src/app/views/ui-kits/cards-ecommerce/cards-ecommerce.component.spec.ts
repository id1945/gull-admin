import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsEcommerceComponent } from './cards-ecommerce.component';

describe('CardsEcommerceComponent', () => {
  let component: CardsEcommerceComponent;
  let fixture: ComponentFixture<CardsEcommerceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
