import { Dispatch, useMemo, useRef } from 'react';
import { useUpdate } from './useUpdate';
import { HookState, InitialHookState, resolveHookState } from '../util/resolveHookState';

export default function useGetSet<S>(initialState: InitialHookState<S>): [() => S, Dispatch<HookState<S>>] {
    const state = useRef(resolveHookState(initialState));
    const update = useUpdate();

    return useMemo(
        () => [
            //get
            () => state.current as S,
            //set
            (newState: HookState<S>) => {
                state.current = resolveHookState(newState, state.current);
                update();
            }
        ],
        []
    );
}

// useCallback returns its function uncalled so you can call it later, 
// while useMemo calls its function and returns the result.

// function foo() {
//     return 'bar';
//   }
  
//   const memoizedCallback = useCallback(foo, []);
//   const memoizedResult = useMemo(foo, []);
  
//   memoizedCallback;
//   // ƒ foo() {
//   //   return 'bar';
//   // }
//   memoizedResult; // 'bar'
//   memoizedCallback(); // 'bar'
//   memoizedResult(); // 🔴 TypeError