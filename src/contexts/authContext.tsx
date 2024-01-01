import React, {useState, createContext, useContext, ReactNode} from 'react';

import {Auth} from '@common/types/auth';

interface IAuthContext {
  authState: Auth;
  nextState: ({isAuthenticated}: {isAuthenticated: boolean}) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => useContext(AuthContext) as IAuthContext;

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [authState, setAuthState] = useState<Auth>({isAuthenticated: false});

  const nextState: IAuthContext['nextState'] = ({
    isAuthenticated,
  }: {
    isAuthenticated: boolean;
  }) => {
    setAuthState({isAuthenticated});
  };

  return (
    <AuthContext.Provider value={{authState, nextState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
