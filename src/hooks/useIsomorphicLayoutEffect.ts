import { useEffect, useLayoutEffect } from 'react';


// useEffect runs asynchronously and after a render is painted to the screen.
// So that looks like:
// You cause a render somehow (change state, or the parent re-renders)
// React renders your component (calls it)
// The screen is visually updated
// THEN useEffect runs

// useLayoutEffect, on the other hand, runs synchronously after a render but before the screen is updated. That goes:
// You cause a render somehow (change state, or the parent re-renders)
// React renders your component (calls it)
// useLayoutEffect runs, and React waits for it to finish.
// The screen is visually updated
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;