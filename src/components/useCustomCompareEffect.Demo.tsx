import React, { useRef, useEffect } from 'react';
import useCounter from '../hooks/useCounter';
import useCustomCompareEffect from '../hooks/useCustomCompareEffect';
import { isDeepEqual } from '../util/util';

export const Demo = () => {
    const [countNormal, { inc: incNormal }] = useCounter(0);
    const [countDeep, { inc: incDeep }] = useCounter(0);
    const [countRef, { inc: incRef }] = useCounter(0);
    const [changeRef, { inc: incChangeRef }] = useCounter(0);
    const options = { max: 10 };
    const onlyRef = useRef(options);
    const otherRef = useRef({ max: 10 });

    useEffect(() => {
        otherRef.current = options;
    }, [options]);

    useEffect(() => {
        if (changeRef < options.max) {
            incChangeRef();
        }
    }, [otherRef.current]);

    useEffect(() => {
        if (countRef < options.max) {
            incRef();
        }
    }, [onlyRef.current]);
  
    React.useEffect(() => {
      if (countNormal < options.max) {
        incNormal();
      }
    }, [options]);
  
    useCustomCompareEffect(
      () => {
        if (countNormal < options.max) {
          incDeep();
        }
      },
      [options],
      (prevDeps, nextDeps) => isDeepEqual(prevDeps, nextDeps)
    );
  
    return (
      <div>
        <p>useEffect: {countNormal}</p>
        <p>useCustomCompareEffect: {countDeep}</p> 
        <p>countRef: {countRef}</p> 
        <p>changeRef: {changeRef}</p> 
      </div>
    );
  };