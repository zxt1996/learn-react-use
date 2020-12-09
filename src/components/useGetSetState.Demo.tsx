import React from 'react';
import useGetSetState from '../hooks/useGetSetState';

export const Demo = () => {
    const [get, setState] = useGetSetState<{ cnt: number }>({ cnt: 0 });
    const onClick = () => {
      setTimeout(() => {
        setState({ cnt: get().cnt + 1 });
      }, 1_000);
    };
  
    return <button onClick={onClick}>Clicked: {get().cnt}</button>;
  };