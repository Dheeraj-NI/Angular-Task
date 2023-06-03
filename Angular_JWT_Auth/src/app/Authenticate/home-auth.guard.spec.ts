import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { homeAuthGuard } from './home-auth.guard';

describe('homeAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => homeAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
