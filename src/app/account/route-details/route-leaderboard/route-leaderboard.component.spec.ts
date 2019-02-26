import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLeaderboardComponent } from './route-leaderboard.component';

describe('RouteLeaderboardComponent', () => {
  let component: RouteLeaderboardComponent;
  let fixture: ComponentFixture<RouteLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
