import React, { useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Counter from './components/Counter';
import './App.css';
import events from './data/events.json';
import _ from 'lodash';

const App = () => {
  const [countType, setCountType] = useState(0)

  const kadai = _(events.kadai)
    .filter(x => new Date(x.datetime).getTime() > new Date().getTime())
    .orderBy(["datetime", "name"], ["asc", "asc"])
    .head()

  return (
    <div className="App">
      <main className="App-main">
        {
          events === {}
            ? ''
            : <Breadcrumbs aria-label="breadcrumb" class="App-link">
              <Link
                color="inherit"
                onClick={() => { setCountType(0) }}
              >
                Hour
              </Link>
              <Link
                color="inherit"
                onClick={() => { setCountType(1) }}
              >
                Date
              </Link>
            </Breadcrumbs>
        }
        {
          events === {}
            ? <p>404 Event Not Found...</p>
            :
            <div>
              {
                !kadai
                  ? <p>KADAI is all completed...!</p>
                  : <Counter
                    event={kadai}
                    countType={countType}
                  />
              }
              <Counter
                event={events.hubday[0]}
                countType={countType}
              />
            </div>
        }
      </main>
    </div>
  );
}

export default App;
