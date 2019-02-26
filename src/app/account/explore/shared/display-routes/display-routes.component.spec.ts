import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRoutesComponent } from './display-routes.component';

describe('DisplayRoutesComponent', () => {
  let component: DisplayRoutesComponent;
  let fixture: ComponentFixture<DisplayRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
