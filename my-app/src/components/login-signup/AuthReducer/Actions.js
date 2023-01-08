import {
  LoginRequest,
  LoginSuccessful,
  LoginFailed,
  SignupRequest,
  SignupSuccessful,
  SignupFailed,
} from "./ActionsTypes";
import { useNavigate } from "react-router-dom";

// export const LoginAction = (info, dispatch) => {
//   console.log("inLoginActionInput", info);
//   dispatch({
//     type: LoginRequest,
//   });

//   dispatch({
//     type: LoginSuccessful,
//     payload: info,
//   });
//   dispatch({
//     type: LoginFailed,
//   });
// };
// export const SignupAction = (info, dispatch) => {
//   console.log("inSignupActionInput", info);
//   dispatch({
//     type: SignupRequest,
//   });
//   dispatch({
//     type: SignupSuccessful,
//     payload: info,
//   });
//   dispatch({
//     type: SignupFailed,
//   });
// };

export const LoginThunkActionCreator = (info) => {
  
  return function LoginThunkAction(dispatch, getState) {
    dispatch({
      type: LoginRequest,
    });
    if (
      (getState().AuthReducer.signup.mobile === info.mobile ||
        getState().AuthReducer.signup.email === info.email) &&
      getState().AuthReducer.signup.password === info.password
    ) {

      dispatch({
        type: LoginSuccessful,
        payload: info,
      });
    } else {
      alert("invalid credentials")
      dispatch({
        type: LoginFailed,
      });
    }
  };
};

export const SignupThunkActionCreator = (info) => {
  return function SignupThunkAction(dispatch, getState) {
    // if(getState().AuthReducer)
    dispatch({
      type: SignupRequest,
    });
    if (
      getState().AuthReducer.signup.mobile === "" ||
      getState().AuthReducer.signup.email === ""
    ) {
      dispatch({
        type: SignupSuccessful,
        payload: info,
      });
    } else {
      dispatch({
        type: SignupFailed,
      });
    }
  };
};

export const logout = ()=>{
  return function abc(dispatch,getState){
    dispatch({type:"logout"})
  }
}
