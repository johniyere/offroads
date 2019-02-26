import { TestBed } from '@angular/core/testing';

import { AddAReviewService } from './add-a-review.service';

describe('AddAReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAReviewService = TestBed.get(AddAReviewService);
    expect(service).toBeTruthy();
  });
});
