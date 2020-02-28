import * as types from "./types";

export const changeMode = (isDisplayMode = true) => ({
  type: types.CHANGE_MODE,
  payload: isDisplayMode
});
