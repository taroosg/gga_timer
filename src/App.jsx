import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider, makeStyles, createStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from "@material-ui/core/colors";

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Counter from './components/Counter';
import './App.css';
import events from './data/events.json';
import _ from 'lodash';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const darkTheme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    type: 'dark',
    primary: {
      // main: '#3e62ad',
      main: '#f39800',
    },
    secondary: colors.orange,
  },
});

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      '& .Link-root': {
        margin: theme.spacing(2),
        // width: '35ch',
      },
    },
  })
);

const App = () => {
  const [countType, setCountType] = useState(0)

  const isCompleted = (events) => {
    return _(events)
      .filter(x => new Date(x.datetime).getTime() > new Date().getTime())
      .orderBy(["datetime", "name"], ["asc", "asc"])
      .head()
  }

  const classes = useStyles(darkTheme);

  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root}>
        {
          events === {}
            ? ''
            : <Breadcrumbs aria-label="breadcrumb" className="Link-root">
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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      component="th"
                      style={{ width: '30ch' }}
                    >
                      Content
                    </TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      style={{ width: '30ch' }}
                    >
                      Limit
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    !isCompleted(events.kadai)
                      ? <p>KADAI is all completed...!</p>
                      : <Counter
                        event={isCompleted(events.kadai)}
                        countType={countType}
                      />
                  }
                  {
                    !isCompleted(events.submit)
                      ? <p>Product is completed...!</p>
                      : <Counter
                        event={isCompleted(events.submit)}
                        countType={countType}
                      />
                  }
                  {
                    !isCompleted(events.hubday)
                      ? <p>GGA is completed...!</p>
                      : <Counter
                        event={isCompleted(events.hubday)}
                        countType={countType}
                      />
                  }
                </TableBody>
              </Table>
            </TableContainer>
        }
      </div>
    </MuiThemeProvider>
  );
}

export default App;
