import { createContext, useContext, useReducer } from "react";
import { supabase } from "../supabaseConfig";
import { AuthContextType, User } from '../types/authTypes';
import { authReducer, initialState } from "../utils/authReducer";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signInWithEmailPassword = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    } else if (data?.user) {
      const user: User = {
        id: data.user.id,
        email: data.user.email ?? '', 
        // Add other fields from the data.user if needed
      };
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, signInWithEmailPassword, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
