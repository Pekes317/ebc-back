/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitleResolve } from './title-resolve.service';

describe('TitleResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleResolve]
    });
  });

  it('should ...', inject([TitleResolve], (service: TitleResolve) => {
    expect(service).toBeTruthy();
  }));
});
