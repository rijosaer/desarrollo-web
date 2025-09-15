import { TestBed } from '@angular/core/testing';

import { LoanDetail } from './loan-detail';

describe('LoanDetail', () => {
  let service: LoanDetail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanDetail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
