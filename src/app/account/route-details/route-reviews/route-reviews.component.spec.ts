import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteReviewsComponent } from './route-reviews.component';

describe('RouteReviewsComponent', () => {
  let component: RouteReviewsComponent;
  let fixture: ComponentFixture<RouteReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
