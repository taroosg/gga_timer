import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
        <BrowserRouter>
          {
            (events.length > 0)
              ? events
                .filter(x => new Date(x.datetime).getTime() > new Date().getTime())
                .sort(compare)
                .map((x, index) => <Counter key={index} event={x} />)
              // .map((x, index) =>
              //   <div>
              //     <Link to={`/${x.name}`}>{x.name}</Link>
              //     <Route path={`/${x.name}`} render={props => <Counter key={index} event={x} />} />
              //   </div>
              // )
              : <p>404 Event Not Found...</p>
          }
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
