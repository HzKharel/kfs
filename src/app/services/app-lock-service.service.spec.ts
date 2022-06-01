import { TestBed } from '@angular/core/testing';

import { AppLockServiceService } from './app-lock-service.service';

describe('AppLockServiceService', () => {
  let service: AppLockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
