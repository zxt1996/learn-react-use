import React from 'react';
import useSetState from '../hooks/useSetState';

export const Demo = () => {
    const [state, setState] = useSetState({});
  
    return (
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <button onClick={() => setState({ hello: 'world' })}>hello</button>
        <button onClick={() => setState({ foo: 'bar' })}>foo</button>
        <button
          onClick={() => {
            setState((prevState) => ({
                // You can assign the object to a constant of type any, then call the 'non-existing' property.
                // 即在调用的时候count的属性不知道是否存在于prevState中，先将其置为any
              count: (prevState as any).count === undefined ? 0 : (prevState as any).count + 1,
            }));
          }}
        >
          increment
        </button>
      </div>
    );
  };