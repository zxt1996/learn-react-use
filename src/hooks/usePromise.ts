import { useCallback } from 'react';
import useMountedState from './useMountedState';

export type UsePromise = () => <T>(promise: Promise<T>) => Promise<T>;

const usePromise: UsePromise = () => {
    const isMounted = useMountedState();

    return useCallback(
        (promise: Promise<any>) => 
            new Promise<any>((resolve, reject) => {
                // 从参数promise中获取value值
                const onValue = (value) => {
                    console.log(value)
                    isMounted() && resolve(value);
                };
                const onError = (error) => {
                    isMounted() && reject(error);
                };

                // .then 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。
                // .then 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。
                promise.then(onValue, onError);
            }),
            []
    );
};

export default usePromise;