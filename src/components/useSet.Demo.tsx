import React from 'react';
import useSet from '../hooks/useSet';

export const Demo = () => {
    const [set, { add, has, remove, reset, toggle }] = useSet(new Set(['hello']));
  
    return (
      <div>
        <button onClick={() => add(String(Date.now()))}>Add</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => remove('hello')} disabled={!has('hello')}>
          Remove 'hello'
        </button>
        <button onClick={() => toggle('hello')}>Toggle 'hello'</button>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    );
  };