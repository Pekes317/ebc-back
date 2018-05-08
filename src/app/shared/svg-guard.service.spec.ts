/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvgGuardService } from './svg-guard.service';

describe('SvgGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgGuardService]
    });
  });

  it('should ...', inject([SvgGuardService], (service: SvgGuardService) => {
    expect(service).toBeTruthy();
  }));
});
