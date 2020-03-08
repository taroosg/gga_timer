import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import events from './data/events.json';

const App = () => {

  return (
    <div className="App">
      <main className="App-main">
        {
          (events.length > 0)
            ? events.map((x, index) => <Counter key={index} event={x} />)
            : <p>404 Event Not Found...</p>
        }
      </main>
    </div>
  );
}

export default App;
