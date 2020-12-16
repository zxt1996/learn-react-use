import { DependencyList, useCallback, useState, useRef } from 'react';
import useMountedState from './useMountedState';
import { FnReturningPromise, PromiseType } from '../util/util';

// 请求的四种状态
export type AsyncState<T> =
  | {
      loading: boolean;
      error?: undefined;
      value?: undefined;
    }
  | {
      loading: true;
      error?: Error | undefined;
      value?: T;
    }
  | {
      loading: false;
      error: Error;
      value?: undefined;
    }
  | {
      loading: false;
      error?: undefined;
      value: T;
    };

    type StateFromFnReturningPromise<T extends FnReturningPromise> = AsyncState<PromiseType<ReturnType<T>>>;

    export type AsyncFnReturn<T extends FnReturningPromise = FnReturningPromise> = [StateFromFnReturningPromise<T>, T];
    
    // 三个参数
    // 一个异步请求函数，一个数组类型的依赖，一个初始状态
    export default function useAsyncFn<T extends FnReturningPromise>(
      fn: T,
      deps: DependencyList = [],
      initialState: StateFromFnReturningPromise<T> = { loading: false }
    ): AsyncFnReturn<T> {
      // 记录是第几次调用
      const lastCallId = useRef(0);
      const isMounted = useMountedState();
      // 设置状态
      const [state, set] = useState<StateFromFnReturningPromise<T>>(initialState);
    
      const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
        // 第几次调用
        const callId = ++lastCallId.current;
        set((prevState) => ({ ...prevState, loading: true }));
    
        // 当异步请求结束时，设置状态
        return fn(...args).then(
          (value) => {
            // 当用户多次请求时，只返回最后一次请求的值
            isMounted() && callId === lastCallId.current && set({ value, loading: false });
    
            return value;
          },
          (error) => {
            isMounted() && callId === lastCallId.current && set({ error, loading: false });
    
            return error;
          }
        ) as ReturnType<T>;
      }, deps);
    
      return [state, (callback as unknown) as T];
    }
    