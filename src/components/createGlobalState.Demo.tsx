import React, { FC } from 'react';
import { createGlobalState } from '../hooks/createGlobalState';

const useGlobalValue = createGlobalState<number>(0);

const CompA: FC = () => {
    const [value, setValue] = useGlobalValue();
  
    return <button onClick={() => setValue(value! + 1)}>+</button>;
  };
  
  const CompB: FC = () => {
    const [value, setValue] = useGlobalValue();
  
    return <button onClick={() => setValue(value! - 1)}>-</button>;
  };
  
  export const Demo: FC = () => {
    const [value] = useGlobalValue();
    return (
      <div>
        <p>{value}</p>
        <CompA />
        <CompB />
      </div>
    );
  };