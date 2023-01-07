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
  signup: {
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
  },
  isLoading: false,
  isError: false,
};
const AuthReducer = (state = info, action) => {
  switch (action.type) {
    case SignupRequest:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case SignupSuccessful:
      state = {
        ...state,
        isLoading: false,
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
      break;
    case SignupFailed:
      state = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    case LoginRequest:
      state = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case LoginSuccessful:
      state = {
        ...state,
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
        isLoading: false,
        isError: true,
      };
      break;
    
  }
  return state;
};
export default AuthReducer;
