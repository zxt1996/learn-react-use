import { useMemo } from 'react';
// Hook factory, receives a function to be memoized, returns a memoized React hook, 
// which receives the same arguments and returns the same result as the original function.

// Parameters<T> -> Constructs a tuple type from the types used in the parameters of a function type Type.
// type T1 = Parameters<(s: string) => void>;
//    = type T1 = [s: string]

// ReturnType<Type>
// Constructs a type consisting of the return type of function Type.
// type T0 = ReturnType<() => string>;
//    = type T0 = string
const createMemo = <T extends (...args: any) => any>(fn: T) => (...args: Parameters<T>) => 
    useMemo<ReturnType<T>>(() => fn(...args), args);

export default createMemo;