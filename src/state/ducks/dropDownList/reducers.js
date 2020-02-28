import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = {
  displayMode: true
};

const dropDownListReducer = createReducer(initialState)({
  [types.CHANGE_MODE]: (state, action) => {
    return {
      ...state,
      displayMode: action.payload
    };
  }
});

export default dropDownListReducer;
