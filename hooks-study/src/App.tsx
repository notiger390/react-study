import React from 'react';
import './App.css';
import UserAuth from './componets/userAuth/UserAuth';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>#4 useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}

export default App;
