import React, { useState } from 'react';

const Counter: React.VFC = () => {
  const initCountState = () => {
    let count = 0;
    for (let index = 0; index < 10000; index++) {
      console.log(count);
      count++;
    }
    return count;
  };
  const [count, setCount] = useState(initCountState);
  const doCountUp = (prev: number) => {
    return prev + 1;
  };
  const onClickCount = () => {
    setCount(doCountUp);
  };

  return (
    <div className="wrapper">
      <div>{count} count</div>
      <button onClick={() => onClickCount()}>countUp</button>
    </div>
  );
};

export default Counter;
