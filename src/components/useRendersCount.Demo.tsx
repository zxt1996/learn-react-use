import React from 'react';
import { useRendersCount } from '../hooks/useRendersCount';
import { useUpdate } from '../hooks/useUpdate';

export const Demo = () => {
    const update = useUpdate();
    const rendersCount = useRendersCount();

    return (
      <div>
        <span>Renders count: {rendersCount}</span>
        <br />
        <button onClick={update}>re-render</button>
      </div>
    );
  };