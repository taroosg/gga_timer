import React from 'react';
import Counter from './components/Counter';
import './App.css';
import events from './data/events.json';
import _ from 'lodash';

const App = () => {

  const kadai = _(events.kadai)
    .filter(x => new Date(x.datetime).getTime() > new Date().getTime())
    .orderBy(["datetime", "name"], ["asc", "asc"])
    .head()

  return (
    <div className="App">
      <main className="App-main">
        {
          (events !== {})
            ?
            <div>
              <Counter event={kadai} />
              <Counter event={events.hubday[0]} />
            </div>
            : <p>404 Event Not Found...</p>
        }
      </main>
    </div>
  );
}

export default App;
