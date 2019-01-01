import { TestBed } from '@angular/core/testing';

import { RouteDetailsService } from './route-details.service';

describe('RouteDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteDetailsService = TestBed.get(RouteDetailsService);
    expect(service).toBeTruthy();
  });
});
