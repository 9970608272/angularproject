import { TestBed } from '@angular/core/testing';

import { ViewplanserviceService } from './viewplanservice.service';

describe('ViewplanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewplanserviceService = TestBed.get(ViewplanserviceService);
    expect(service).toBeTruthy();
  });
});
