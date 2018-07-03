import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Template } from '../models/template.model';

export enum TemplateActionTypes {
  LoadTemplates = '[Template] Load Templates',
  AddTemplate = '[Template] Add Template',
  UpsertTemplate = '[Template] Upsert Template',
  AddTemplates = '[Template] Add Templates',
  UpsertTemplates = '[Template] Upsert Templates',
  UpdateTemplate = '[Template] Update Template',
  UpdateTemplates = '[Template] Update Templates',
  DeleteTemplate = '[Template] Delete Template',
  DeleteTemplates = '[Template] Delete Templates',
  ClearTemplates = '[Template] Clear Templates'
}

export class LoadTemplates implements Action {
  readonly type = TemplateActionTypes.LoadTemplates;

  constructor(public payload: { templates: Template[] }) {}
}

export class AddTemplate implements Action {
  readonly type = TemplateActionTypes.AddTemplate;

  constructor(public payload: { template: Template }) {}
}

export class UpsertTemplate implements Action {
  readonly type = TemplateActionTypes.UpsertTemplate;

  constructor(public payload: { template: Template }) {}
}

export class AddTemplates implements Action {
  readonly type = TemplateActionTypes.AddTemplates;

  constructor(public payload: { templates: Template[] }) {}
}

export class UpsertTemplates implements Action {
  readonly type = TemplateActionTypes.UpsertTemplates;

  constructor(public payload: { templates: Template[] }) {}
}

export class UpdateTemplate implements Action {
  readonly type = TemplateActionTypes.UpdateTemplate;

  constructor(public payload: { template: Update<Template> }) {}
}

export class UpdateTemplates implements Action {
  readonly type = TemplateActionTypes.UpdateTemplates;

  constructor(public payload: { templates: Update<Template>[] }) {}
}

export class DeleteTemplate implements Action {
  readonly type = TemplateActionTypes.DeleteTemplate;

  constructor(public payload: { id: string }) {}
}

export class DeleteTemplates implements Action {
  readonly type = TemplateActionTypes.DeleteTemplates;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTemplates implements Action {
  readonly type = TemplateActionTypes.ClearTemplates;
}

export type TemplateActions =
 LoadTemplates
 | AddTemplate
 | UpsertTemplate
 | AddTemplates
 | UpsertTemplates
 | UpdateTemplate
 | UpdateTemplates
 | DeleteTemplate
 | DeleteTemplates
 | ClearTemplates;
