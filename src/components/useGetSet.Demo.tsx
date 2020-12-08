import React, { useState } from 'react';
import useGetSet from '../hooks/useGetSet';

export const Demo = () => {
    const [get, set] = useGetSet(0);
    const onClick = () => {
      setTimeout(() => {
        set(get() + 1);
      }, 1_000);
    };
  
    return <button onClick={onClick}>Clicked: {get()}</button>;
  };
  
  export const DemoWrong = () => {
    const [cnt, set] = useState(0);
    const onClick = () => {
      setTimeout(() => {
        set(cnt + 1);
      }, 1_000);
    };
  
    return <button onClick={onClick}>Clicked: {cnt}</button>;
  };