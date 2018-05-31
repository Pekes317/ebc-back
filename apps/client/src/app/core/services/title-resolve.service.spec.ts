/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitleResolveService } from './title-resolve.service';

describe('TitleResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleResolveService]
    });
  });

  it('should ...', inject([TitleResolveService], (service: TitleResolveService) => {
    expect(service).toBeTruthy();
  }));
});
