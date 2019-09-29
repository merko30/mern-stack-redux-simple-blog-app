import {
  loginAction,
  registerAction,
  setStatusAction,
  clearErrorAction,
  getCurrentUserAction,
  logoutAction,
  verifyEmailAction,
  resetPasswordAction,
  clearMessageAction,
  forgotPasswordAction,
  updateFieldAction
} from "./auth.actions";

const initialState = {
  loggedIn: false,
  error: null,
  loading: false,
  user: null,
  message: null,
  warning: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerAction.start().type:
    case loginAction.start().type:
    case getCurrentUserAction.start().type:
    case verifyEmailAction.start().type:
    case resetPasswordAction.start().type:
    case forgotPasswordAction.start().type:
    case updateFieldAction.start().type:
      return {
        ...state,
        loading: true
      };
    case registerAction.success().type:
      return {
        ...state,
        loading: false,
        error: null,
        warning: action.payload
      };
    case forgotPasswordAction.success().type:
    case verifyEmailAction.success().type:
    case resetPasswordAction.success().type:
    case updateFieldAction.success().type:
      return {
        ...state,
        loading: false,
        error: null,
        message: action.payload
      };
    case loginAction.success().type:
      const { message, user } = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        loggedIn: true,
        user,
        warning: message ? message : null
      };
    case registerAction.failure().type:
    case loginAction.failure().type:
    case getCurrentUserAction.failure().type:
    case verifyEmailAction.failure().type:
    case resetPasswordAction.failure().type:
    case forgotPasswordAction.failure().type:
    case updateFieldAction.failure().type:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case setStatusAction.start().type:
      return {
        ...state,
        loggedIn: action.payload
      };
    case clearErrorAction.start().type:
      return {
        ...state,
        error: null
      };
    case getCurrentUserAction.success().type:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        loading: false,
        warning: action.payload.message ? action.payload.message : null
      };
    case logoutAction.start().type:
      return {
        ...state,
        user: null,
        loggedIn: false
      };
    case clearMessageAction.start().type:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
};

export default authReducer;
