import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedTrailsComponent } from './bookmarked-trails.component';

describe('BookmarkedTrailsComponent', () => {
  let component: BookmarkedTrailsComponent;
  let fixture: ComponentFixture<BookmarkedTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
