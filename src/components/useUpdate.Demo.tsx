import React from 'react';
import { useUpdate, useUpdateUseState } from '../hooks/useUpdate';

export default () => {
    const update = useUpdate();
    const updateTwo = useUpdateUseState();

    return (
        <>
            <div>
                Time: {Date.now()}
            </div>
            <button onClick={update}>update</button>
            <button onClick={updateTwo}>updateTwo</button>
        </>
    )
}