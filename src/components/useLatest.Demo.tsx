import React, { useState } from 'react';
import useLatest from '../hooks/useLatest';

export const Demo = () => {
    const [count, setCount] = useState(0);
    const latestCount = useLatest(count);
    const timeoutMs = 3000;

    function handleAlertClick() {
        setTimeout(() => {
            alert(`Latest count value: ${latestCount.current}`);
        }, timeoutMs)
    }

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={handleAlertClick}>Show alert in {timeoutMs / 1000}s</button>
        </div>
      );
}