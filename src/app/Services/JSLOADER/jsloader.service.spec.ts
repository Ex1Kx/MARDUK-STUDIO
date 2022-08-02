import { TestBed } from '@angular/core/testing';

import { JSLOADERService } from './jsloader.service';

describe('JSLOADERService', () => {
  let service: JSLOADERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSLOADERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
