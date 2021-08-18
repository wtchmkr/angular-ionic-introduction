import { createSelector } from '@ngrx/store';

export interface FeatureState {
  data: any;
  times: number;
  catfacts: [];
}

export interface AppState {
  example: FeatureState;
}

export const selectFeature = (state: AppState) => state.example;

export const selectFeatureData = createSelector(
  selectFeature,
  (state: FeatureState) => state.data
);

export const selectFeatureCatfacts = createSelector(
  selectFeature,
  (state: FeatureState) => state.catfacts
)
