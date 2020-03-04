import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const target = new Date(2020, 4, 21, 19, 0, 0).getTime();

  const culcTime = target => {
    const now = new Date().getTime();
    return target - now;
  };

  const convertTime = timestamp => {
    const days = String(Math.floor(timestamp / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timestamp % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  const setTime = target => {
    setTimeout(() => {
      setCount(culcTime(target));
      setTime(target);
    }, 1000);
  }

  useEffect(() => {
    setTimeout(setTime(target), 1000);
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        {
          (count === 0)
            ? <p>now loading...</p>
            : <p>次回GGAまで <code>{convertTime(count)}</code></p>
        }
      </main>
    </div>
  );
}

export default App;
