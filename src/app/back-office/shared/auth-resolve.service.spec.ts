/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthResolveService } from './auth-resolve.service';

describe('AuthResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthResolveService]
    });
  });

  it('should ...', inject([AuthResolveService], (service: AuthResolveService) => {
    expect(service).toBeTruthy();
  }));
});
