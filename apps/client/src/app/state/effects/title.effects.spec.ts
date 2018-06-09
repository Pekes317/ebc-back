import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TitleEffects } from './title.effects';

describe('TitleService', () => {
  let actions$: Observable<any>;
  let effects: TitleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TitleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TitleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
