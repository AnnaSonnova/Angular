import { TestBed } from '@angular/core/testing';

import { GardianLoginGuard } from './gardian-login.guard';

describe('GardianLoginGuard', () => {
  let guard: GardianLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardianLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
