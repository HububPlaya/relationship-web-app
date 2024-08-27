// authReducer.ts
import { AuthState, AuthAction } from "../types/authTypes";

export const initialState: AuthState = {
  user: null,
  error: null,
  isSubmitting: false,
  isAuthenticated: false,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isSubmitting: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, isSubmitting: false, user: action.payload, isAuthenticated: true };
    case 'LOGIN_FAILURE':
      return { ...state, isSubmitting: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};
