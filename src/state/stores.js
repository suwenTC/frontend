import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from "./ducks";

const store = createStore(combineReducers(reducers), composeWithDevTools());

export default store;
