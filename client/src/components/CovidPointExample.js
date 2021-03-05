import React from 'react';
import CovidPointContext from '../contexts/CovidPointContext';

const CovidPointExample = () => {

    const increase = (point, onPointChange) => {
        onPointChange(point + 1);
    }

    const decrease = (point, onPointChange) => {
        onPointChange(point - 1);
    }

    // Using Consumer as the root HTML tag, and put everything else inside the callback function of it
    // The argument should be an Object with 'point' and 'onPointChange' property, which are defined in CovidPointContext.js
    return (
        <CovidPointContext.Consumer>
            {({ point, onPointChange }) => {
                return (
                    <>
                        <p>Your COVID points: { point }</p>
                        <button onClick={() => { increase(point, onPointChange) }}>Increase</button>
                        <button onClick={() => { decrease(point, onPointChange) }}>Decrease</button>  
                    </>
                );
            }}
        </CovidPointContext.Consumer>
    );
}


export default CovidPointExample;