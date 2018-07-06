import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminDataEffects } from './admin-data.effects';

describe('AdminDataService', () => {
  let actions$: Observable<any>;
  let effects: AdminDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AdminDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
