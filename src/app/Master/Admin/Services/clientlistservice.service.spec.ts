import { TestBed } from '@angular/core/testing';

import { ClientlistserviceService } from './clientlistservice.service';

describe('ClientlistserviceService', () => {
  let service: ClientlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
