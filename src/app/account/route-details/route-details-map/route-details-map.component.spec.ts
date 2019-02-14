import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetailsMapComponent } from './route-details-map.component';

describe('RouteDetailsMapComponent', () => {
  let component: RouteDetailsMapComponent;
  let fixture: ComponentFixture<RouteDetailsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDetailsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
