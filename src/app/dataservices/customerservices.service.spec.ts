import { TestBed } from '@angular/core/testing';

import { CustomerservicesService } from './customerservices.service';

describe('CustomerservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerservicesService = TestBed.get(CustomerservicesService);
    expect(service).toBeTruthy();
  });
});
