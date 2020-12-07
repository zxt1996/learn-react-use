import React from 'react';
import createMemo from '../hooks/createMemo';

const fibonacci = (n) => {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  const useMemoFibonacci = createMemo(fibonacci);
  
  export const Demo = () => {
    const result = useMemoFibonacci(10);
  
    return <div>fib(10) = {result}</div>;
  };

   