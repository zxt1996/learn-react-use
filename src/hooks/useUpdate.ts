import { useCallback, useState, useReducer } from 'react';

// 强制迫使组件重新渲染
const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export const useUpdate = () => {
    const [, update] = useReducer(updateReducer, 0);
    return update as () => void;
}

export const useUpdateUseState = () => {
    const [, setState] = useState({});

    return useCallback(() => setState({}), []);
}

// 3 Reasons to useReducer() over useState()

// 1. Next state depends on the previous

// function reducer(state, action) {
//     switch (action.type) {
//       case 'ADD': return { count: state.count + 1 };
//       case 'SUB': return { count: state.count - 1 };
//       default: return state;
//     }
//   }
  
//   function Counter() {
//     const [state, dispatch] = React.useReducer(reducer, { count: 0 });
//     return (
//       <>
//         Count: {state.count}
//         <button onClick={() => dispatch({type: 'ADD'})}>Add</button>
//         <button onClick={() => dispatch({type: 'SUB'})}>Substract</button>
//       </>
//     );
//   }

// 2.Complex state shape

// const [state, dispatch] = React.useReducer(
//     fetchUsersReducer,
//     {
//       users: [
//         { name: 'John', subscribred: false },
//         { name: 'Jane', subscribred: true },
//       ],
//       loading: false,
//       error: false,
//     },
//   );

// 3.Easy to test
// Reducers are pure functions, 
// and this means they have no side effects and must return the same outcome given the same arguments.

// test("increments the count by one", () => {
//     const newState = reducer({ count: 0 }, { type: "ADD" });
//     expect(newState.count).toBe(1)
//   })