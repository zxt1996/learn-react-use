import React, { useState, useEffect, useCallback } from 'react';
import usePromise from '../hooks/usePromise';

const DemoInner = ({ promise }) => {
    const safePromise = usePromise();
    const [value, setValue] = useState<number>(-1);
    useEffect(() => {
        safePromise(promise).then((value) => {
            if (typeof value === 'number') {
                setValue(value);
            }
        })
    }, [promise]);

    return <div>
        {value === -1 ? 'Resolving value...' : 'Value: ' + value}
    </div>
}

export const Demo = () => {
    const [mounted, toggleMounted] = useState(true);
    const [num, changeNum] = useState(0);

    const inc = useCallback(() => {
        changeNum(num + 1);
    }, [num])
    const promise = new Promise((r) => setTimeout(() => r(num), 1_000));
  
    return (
      <div>
        <p>This demo provides a number in a promise that resolves in 1sec to a child component.</p>
        <button onClick={() => toggleMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'}</button>
        <button onClick={() => inc()}>Increment ({num})</button>
        <br />
        {mounted && <DemoInner promise={promise} />}
      </div>
    );
  };