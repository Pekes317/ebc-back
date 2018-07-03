import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Sample } from '../models/sample.model';

export enum SampleActionTypes {
  LoadSamples = '[Sample] Load Samples',
  AddSample = '[Sample] Add Sample',
  UpsertSample = '[Sample] Upsert Sample',
  AddSamples = '[Sample] Add Samples',
  UpsertSamples = '[Sample] Upsert Samples',
  UpdateSample = '[Sample] Update Sample',
  UpdateSamples = '[Sample] Update Samples',
  DeleteSample = '[Sample] Delete Sample',
  DeleteSamples = '[Sample] Delete Samples',
  ClearSamples = '[Sample] Clear Samples'
}

export class LoadSamples implements Action {
  readonly type = SampleActionTypes.LoadSamples;

  constructor(public payload: { samples: Sample[] }) {}
}

export class AddSample implements Action {
  readonly type = SampleActionTypes.AddSample;

  constructor(public payload: { sample: Sample }) {}
}

export class UpsertSample implements Action {
  readonly type = SampleActionTypes.UpsertSample;

  constructor(public payload: { sample: Sample }) {}
}

export class AddSamples implements Action {
  readonly type = SampleActionTypes.AddSamples;

  constructor(public payload: { samples: Sample[] }) {}
}

export class UpsertSamples implements Action {
  readonly type = SampleActionTypes.UpsertSamples;

  constructor(public payload: { samples: Sample[] }) {}
}

export class UpdateSample implements Action {
  readonly type = SampleActionTypes.UpdateSample;

  constructor(public payload: { sample: Update<Sample> }) {}
}

export class UpdateSamples implements Action {
  readonly type = SampleActionTypes.UpdateSamples;

  constructor(public payload: { samples: Update<Sample>[] }) {}
}

export class DeleteSample implements Action {
  readonly type = SampleActionTypes.DeleteSample;

  constructor(public payload: { id: number }) {}
}

export class DeleteSamples implements Action {
  readonly type = SampleActionTypes.DeleteSamples;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearSamples implements Action {
  readonly type = SampleActionTypes.ClearSamples;
}

export type SampleActions =
 LoadSamples
 | AddSample
 | UpsertSample
 | AddSamples
 | UpsertSamples
 | UpdateSample
 | UpdateSamples
 | DeleteSample
 | DeleteSamples
 | ClearSamples;