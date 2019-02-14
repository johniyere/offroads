import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteElevationChartComponent } from './route-elevation-chart.component';

describe('RouteElevationChartComponent', () => {
  let component: RouteElevationChartComponent;
  let fixture: ComponentFixture<RouteElevationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteElevationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteElevationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
