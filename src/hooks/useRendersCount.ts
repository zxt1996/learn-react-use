import { useRef } from 'react';

export function useRendersCount(): number {
    return ++useRef(0).current;
}

// The useState will cause re-render for the component
// The useRefwill persist the data throughout the whole component re-rendering process.