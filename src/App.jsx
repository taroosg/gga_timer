import React from 'react';
import Counter from './components/Counter';
import './App.css';
import events from './data/events.json';

const App = () => {

  const compare = (a, b) => {
    const datetimeA = a.datetime.toUpperCase();
    const datetimeB = b.datetime.toUpperCase();
    return (datetimeA > datetimeB) ? 1 : -1;
  }

  return (
    <div className="App">
      <main className="App-main">
        {
          (events.length > 0)
            ? events
              .filter(x => new Date(x.datetime).getTime() > new Date().getTime())
              .sort(compare)
              .map((x, index) => <Counter key={index} event={x} />)
            : <p>404 Event Not Found...</p>
        }
      </main>
    </div>
  );
}

export default App;
