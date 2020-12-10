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


// useMemo和shouldComponentUpdate的区别在于useMemo只是一个通用的无副作用的缓存Hook，并不会影响组件的渲染与否。
// useMemo为我们提供了一种通用的性能优化方法，
// 对于一些耗性能的计算，我们可以用useMemo来缓存计算结果，只要依赖的参数没有发生变化，就达到了性能优化的目的。