import React, { useEffect, useState, useCallback } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Counter = ({ event, countType }) => {
  const [count, setCount] = useState(0);

  const convertDatetimeToTimestamp = datetime => new Date(datetime).getTime();

  const culcTime = target => {
    const now = new Date().getTime();
    return target - now + 1000;
  };

  const convertHour = timestamp => {
    const hours = String(Math.floor(timestamp / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timestamp % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${hours}h ${minutes}m ${seconds}s`
  }

  const convertDate = timestamp => {
    const days = String(Math.floor(timestamp / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timestamp % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  const convertCount = [convertHour, convertDate];

  const setTime = useCallback(targetTimestamp => {
    setTimeout(() => {
      setCount(culcTime(targetTimestamp));
      setTime(targetTimestamp);
    }, 100);
  }, [])

  useEffect(() => {
    setTime(convertDatetimeToTimestamp(event.datetime));
  }, [event.datetime, setTime]);

  return (
    <>
      {
        count === 0
          ? ''
          : <TableRow>
            <TableCell align="center">
              {event.name}
            </TableCell>
            <TableCell align="center">{convertCount[countType](count)}</TableCell>
          </TableRow>
      }
    </>
  );
}

export default Counter;