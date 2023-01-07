import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import AuthReducer from "../login-signup/AuthReducer/AuthReducer"
import {productsReducer} from "../product page/productsReducer";
import thunk from "redux-thunk"
import ProductRed from "../singleProduct page/productReducer";

const combinedReducer = combineReducers({
  AuthReducer: AuthReducer,
  // productReducer: productReducer, //this is only for combined
  singlePR:ProductRed,
  product: productsReducer
  // you can add here your reducers with key
});



const store = legacy_createStore(combinedReducer, applyMiddleware(logger,thunk));
console.log(store.getState())

export {store};