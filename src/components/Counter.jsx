import React, { useEffect, useState } from 'react';

const Counter = props => {
  const [count, setCount] = useState(0);

  const convertDatetimeToTimestamp = datetime => new Date(datetime).getTime();

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

  const setTime = targetTimestamp => {
    setTimeout(() => {
      setCount(culcTime(targetTimestamp));
      setTime(targetTimestamp);
    }, 1000);
  }

  useEffect(() => {
    setTime(convertDatetimeToTimestamp(props.event.datetime));
  }, [props]);

  return (
    <div>
      {
        (count === 0)
          ? ''
          : <p><code>{convertTime(count)} until {props.event.name}</code></p>
      }
    </div>
  );
}

export default Counter;