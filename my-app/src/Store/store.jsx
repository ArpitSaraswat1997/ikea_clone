import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { AuthReducer } from "../Components/Account/AuthReducer/AuthReducer";
import { dummyReducer } from "../Components/Account/AuthReducer/dummyReducer"; // this is just for combined

const combinedReducer = combineReducers({
  AuthReducer: AuthReducer,
  dummy: dummyReducer, //this is only for combined
  // you can add here your reducers with key
});

const store = legacy_createStore(combinedReducer, applyMiddleware(logger));

export { store };
