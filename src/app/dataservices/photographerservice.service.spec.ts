import { TestBed } from '@angular/core/testing';

import { PhotographerserviceService } from './photographerservice.service';

describe('PhotographerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotographerserviceService = TestBed.get(PhotographerserviceService);
    expect(service).toBeTruthy();
  });
});
