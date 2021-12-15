import React, { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  userAuth: boolean;
  user2: boolean;
  setUser2Auth: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: (bool: boolean) => void;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [user2, setUser2Auth] = useState(false);

  const setUser = (bool: boolean) => {
    setUserAuth(bool);
  };

  useEffect(() => {
    console.log('プロバイダーのuseEffect');

    return () => {};
  }, []);
  return <AuthContext.Provider value={{ userAuth, setUser, user2, setUser2Auth }}>{children}</AuthContext.Provider>;
};
