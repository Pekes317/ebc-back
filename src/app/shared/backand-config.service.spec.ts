/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BackandConfigService } from './backand-config.service';

describe('Service: BackandConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackandConfigService]
    });
  });

  it('should ...', inject([BackandConfigService], (service: BackandConfigService) => {
    expect(service).toBeTruthy();
  }));
});
