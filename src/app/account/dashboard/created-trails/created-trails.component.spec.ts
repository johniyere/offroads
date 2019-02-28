import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTrailsComponent } from './created-trails.component';

describe('CreatedTrailsComponent', () => {
  let component: CreatedTrailsComponent;
  let fixture: ComponentFixture<CreatedTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
