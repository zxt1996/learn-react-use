import React from 'react';
import useMountedState from '../hooks/useMountedState';

export const Demo = () => {
    const isMounted = useMountedState();
  
    return <div>This component is {isMounted() ? 'MOUNTED' : 'NOT MOUNTED'}</div>;
  };