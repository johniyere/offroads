import { TestBed } from '@angular/core/testing';

import { UploadRunService } from './upload-run.service';

describe('UploadRunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadRunService = TestBed.get(UploadRunService);
    expect(service).toBeTruthy();
  });
});
