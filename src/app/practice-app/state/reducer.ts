import { createReducer, on } from "@ngrx/store";
import { sethelloWorldString } from "./actions";

export interface HelloWorldState {
  message: string;
}

export const initialState: HelloWorldState = {
  message: ""
}

export const helloWorldReducer = createReducer(
  initialState,
  on(sethelloWorldString, (state, { message }) => { return {...state, message}}),
  );