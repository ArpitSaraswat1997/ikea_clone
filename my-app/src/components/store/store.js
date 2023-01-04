import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import AuthReducer from "../login-signup/loginReducer";
import productReducer from "../product page/productReducer";

const combinedReducer = combineReducers({
  AuthReducer: AuthReducer,
  productReducer: productReducer, //this is only for combined
  // you can add here your reducers with key
});

const store = legacy_createStore(combinedReducer, applyMiddleware(logger));

export {store};