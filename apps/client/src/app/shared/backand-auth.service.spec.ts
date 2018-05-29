/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BackandAuthService } from './backand-auth.service';

describe('Service: BackandAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackandAuthService]
    });
  });

  it('should ...', inject([BackandAuthService], (service: BackandAuthService) => {
    expect(service).toBeTruthy();
  }));
});
