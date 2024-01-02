import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';

import {Auth} from '@common/types/auth';

interface IAuthContext {
  authState: Auth;
  nextState: ({isAuthenticated}: {isAuthenticated: boolean}) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [authState, setAuthState] = useState<Auth>({isAuthenticated: false});

  const nextState = useCallback(
    ({isAuthenticated}: {isAuthenticated: boolean}) => {
      setAuthState({isAuthenticated});
    },
    [],
  );

  return (
    <AuthContext.Provider value={{authState, nextState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
