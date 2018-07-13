import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Template } from '../models/template.model';
import { TemplateActions, TemplateActionTypes } from '../actions/template.actions';
import { selectTemplates } from './item-store.selectors';

export interface State extends EntityState<Template> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Template> = createEntityAdapter<Template>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: TemplateActions
): State {
  switch (action.type) {
    case TemplateActionTypes.AddTemplate: {
      return adapter.addOne(action.payload.template, state);
    }

    case TemplateActionTypes.UpsertTemplate: {
      return adapter.upsertOne(action.payload.template, state);
    }

    case TemplateActionTypes.AddTemplates: {
      return adapter.addMany(action.payload.templates, state);
    }

    case TemplateActionTypes.UpsertTemplates: {
      return adapter.upsertMany(action.payload.templates, state);
    }

    case TemplateActionTypes.UpdateTemplate: {
      return adapter.updateOne(action.payload.template, state);
    }

    case TemplateActionTypes.UpdateTemplates: {
      return adapter.updateMany(action.payload.templates, { ...state });
    }

    case TemplateActionTypes.DeleteTemplate: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TemplateActionTypes.DeleteTemplates: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TemplateActionTypes.LoadTemplates: {
      return adapter.addAll(action.payload.templates, state);
    }

    case TemplateActionTypes.ClearTemplates: {
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
} = adapter.getSelectors(selectTemplates);
