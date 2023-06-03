import { TestBed } from '@angular/core/testing';

import { HTTPConnectService } from './httpconnect.service';

describe('HTTPConnectService', () => {
  let service: HTTPConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
