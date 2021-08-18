import { createAction, props } from '@ngrx/store';

export const testAction = createAction(
  '[Example NgRx] test Action'
);

export const addData = createAction(
  '[Example NgRx] Add Data',
  props<{data: any}>()
)

export const dataAdded = createAction(
  '[Example NgRx] Data Added',
  props<{catfact: any}>()
)
