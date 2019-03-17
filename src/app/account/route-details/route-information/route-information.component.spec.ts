import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInformationComponent } from './route-information.component';

describe('RouteInformationComponent', () => {
  let component: RouteInformationComponent;
  let fixture: ComponentFixture<RouteInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
