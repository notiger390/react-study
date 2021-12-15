import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const handleSignOut = () => {
    auth?.setUser(false);
  };

  const handleSignIn = () => {
    auth?.setUser(true);
  };

  return (
    <React.Fragment>
      {auth?.userAuth ? (
        <button onClick={handleSignOut}>ログアウト</button>
      ) : (
        <button onClick={handleSignIn}>ログイン</button>
      )}
    </React.Fragment>
  );
};

export default AuthButton;
