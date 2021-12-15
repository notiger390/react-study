import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AuthDisplay: React.VFC = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log('変更検知テスト');

    return () => {};
  }, [auth?.userAuth]);
  return <div>{auth?.userAuth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>;
};

export default AuthDisplay;
