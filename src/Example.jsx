import React, { useEffect } from 'react';

export const Example = () => {

    useEffect(() => {
       console.log('my component is mounted');
    });


    return (
        <>
            <h1>Example</h1>
        </>

    );
};
