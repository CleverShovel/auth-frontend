import { TestBed } from '@angular/core/testing';

import { RegService } from './reg.service';

describe('RegServiceService', () => {
  let service: RegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
