import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './componets/counter/counter';
import InputForm from './componets/InputForm';
import ItemList from './componets/ItemList/ItemList';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="App">
      <h2>#2 useEffect</h2>
      {/* <button onClick={() => handleDisplay()}>
        {isDisplay ? 'コンポーネント非表示' : 'コンポーネント表示'}
      </button> */}
      {/* {isDisplay && <Counter />} */}
      {/* <InputForm /> */}
      <ItemList />
    </div>
  );
}

export default App;
