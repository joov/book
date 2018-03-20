import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';

describe('ConfirmCandeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCandeactivateGuard]
    });
  });

  it('should ...', inject([ConfirmCandeactivateGuard], (guard: ConfirmCandeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
