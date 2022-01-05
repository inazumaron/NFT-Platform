import { TestBed } from '@angular/core/testing';

import { AcctService } from './acct.service';

describe('AcctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcctService = TestBed.get(AcctService);
    expect(service).toBeTruthy();
  });
});
