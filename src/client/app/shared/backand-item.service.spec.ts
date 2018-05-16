/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BackandItemService } from './backand-item.service';

describe('Service: BackandItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackandItemService]
    });
  });

  it('should ...', inject([BackandItemService], (service: BackandItemService) => {
    expect(service).toBeTruthy();
  }));
});
