import {Action, createReducer, on} from "@ngrx/store";
import {addData, dataAdded} from "./example-ngrx.actions";

export interface State {
  data: any;
  times: number;
  catfacts: any[];
}

export const initialState: State = {
  data: {},
  times: 0,
  catfacts: []
}

const exampleReducer = createReducer(
  initialState,
  on(addData, (state, action) => {
    return {
      ...state,
      data: action.data
    }
  }),
  on(dataAdded, (state, action) => {
    return {
      ...state,
      times: state.times + 1,
      catfacts: [...state.catfacts, action.catfact]
    }
  })
)

export function reducer(state: State | undefined, action: Action) {
  return exampleReducer(state, action);
}
