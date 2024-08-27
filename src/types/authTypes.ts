// authTypes.ts
export interface AuthState {
    user: User | null;
    error: string | null;
    isSubmitting: boolean;
    isAuthenticated: boolean;
  }
  
  export type AuthAction =
    | { type: 'LOGIN_START' }
    | { type: 'LOGIN_SUCCESS'; payload: User }
    | { type: 'LOGIN_FAILURE'; payload: string }
    | { type: 'LOGOUT' };
  
  export interface User {
    id: string;
    email: string;
    // Add more fields as needed from the Supabase user object
  }
  
  export interface AuthContextType {
    state: AuthState;
    signInWithEmailPassword: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
  }
  