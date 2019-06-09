import { TestBed } from '@angular/core/testing';

import { PublicationAPIService } from './publication-api.service';

describe('PublicationAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicationAPIService = TestBed.get(PublicationAPIService);
    expect(service).toBeTruthy();
  });
});
