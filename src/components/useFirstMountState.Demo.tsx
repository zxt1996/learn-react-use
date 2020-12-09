import React from 'react';
import { useFirstMountState } from '../hooks/useFirstMountState';
import { useUpdate } from '../hooks/useUpdate';

export const Demo = () => {
    const isFirstMount = useFirstMountState();
    const update = useUpdate();
  
    return (
      <div>
        <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
        <br />
        <button onClick={() => {
            console.log(isFirstMount);
            update();
        }}>re-render</button>
      </div>
    );
  };