import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Sample } from '../models/sample.model';
import { SampleActions, SampleActionTypes } from '../actions/sample.actions';

export interface State extends EntityState<Sample> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Sample> = createEntityAdapter<Sample>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: SampleActions
): State {
  switch (action.type) {
    case SampleActionTypes.AddSample: {
      return adapter.addOne(action.payload.sample, state);
    }

    case SampleActionTypes.UpsertSample: {
      return adapter.upsertOne(action.payload.sample, state);
    }

    case SampleActionTypes.AddSamples: {
      return adapter.addMany(action.payload.samples, state);
    }

    case SampleActionTypes.UpsertSamples: {
      return adapter.upsertMany(action.payload.samples, state);
    }

    case SampleActionTypes.UpdateSample: {
      return adapter.updateOne(action.payload.sample, state);
    }

    case SampleActionTypes.UpdateSamples: {
      return adapter.updateMany(action.payload.samples, state);
    }

    case SampleActionTypes.DeleteSample: {
      return adapter.removeOne(action.payload.id, state);
    }

    case SampleActionTypes.DeleteSamples: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case SampleActionTypes.LoadSamples: {
      return adapter.addAll(action.payload.samples, state);
    }

    case SampleActionTypes.ClearSamples: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
