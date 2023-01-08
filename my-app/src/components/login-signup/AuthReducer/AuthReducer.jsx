import {
  LoginRequest,
  LoginSuccessful,
  LoginFailed,
  SignupRequest,
  SignupSuccessful,
  SignupFailed,
} from "./ActionsTypes";

const info = {
  login: {
    mobile: "",
    email: "",
    password: "",
  },
  signup: JSON.parse(localStorage.getItem("userData")) || {
    firstName: "",
    surname: "",
    mobile: "",
    birthDate: null,
    gender: "",
    postCode: "",
    store: "",
    email: "",
    password: "",
    contactOnEmail: "OK",
    contactOnSms: "OK",
    contactOnDirectMail: "OK",
    terms: "",
  }  ,
  isAuth: false,
  isError: false,
};
const AuthReducer = (state = info, action) => {
  switch (action.type) {
    case SignupRequest:
      state = {
        ...state,
        // isAuth: true,
      };
      break;
    case SignupSuccessful:
      state = {
        ...state,
        // isAuth: false,
        isError: false,
        signup: {
          firstName: action.payload.firstName,
          surname: action.payload.surname,
          mobile: action.payload.mobile,
          birthDate: action.payload.birthDate,
          gender: action.payload.gender,
          postCode: action.payload.postCode,
          store: action.payload.store,
          email: action.payload.email,
          password: action.payload.password,
          contactOnEmail: action.payload.contactOnEmail,
          contactOnSms: action.payload.contactOnSms,
          contactOnDirectMail: action.payload.contactOnDirectMail,
          terms: action.payload.terms,
        },
      };
      localStorage.setItem("userData",JSON.stringify(state.signup))
      break;
    case SignupFailed:
      state = {
        ...state,
        // isAuth: false,
        isError: true,
      };
      break;
    case LoginRequest:
      state = {
        ...state,
        // isAuth: true,
        isError: false,
      };
      break;
    case LoginSuccessful:
      state = {
        ...state,
        isAuth: true,
        login: {
          mobile: action.payload.mobile || "",
          email: action.payload.email || "",
          password: action.payload.password,
        },
      };
      break;
    case LoginFailed:
      state = {
        ...state,
        isAuth: false,
        isError: true,
      };
      break;
    case "logout":
      state = {
        ...state,
        isAuth: false,
      }
    
  }
  return state;
};
export default AuthReducer;
