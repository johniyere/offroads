import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRunComponent } from './upload-run.component';

describe('UploadRunComponent', () => {
  let component: UploadRunComponent;
  let fixture: ComponentFixture<UploadRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
