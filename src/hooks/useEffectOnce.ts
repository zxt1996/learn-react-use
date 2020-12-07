import { EffectCallback, useEffect } from 'react';

// 只运行一次的hook函数
const useEffectOnce = (effect: EffectCallback) => {
    useEffect(effect, []);
}

export default useEffectOnce;