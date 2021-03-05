import React from 'react';
import CovidPointContext from '../contexts/CovidPointContext';

// This file is example of how to access/modify global variable CovidPoint

// Method 1: Function Component

const CovidPointExample = () => {

    const increase = (pt, change) => {
        change(pt + 1);
    }

    const decrease = (pt, change) => {
        change(pt - 1);
    }

    // Using Consumer as the root HTML tag, and put everything else inside the callback function of it
    // The argument should be an Object with 'point' and 'onPointChange' property, which are defined in CovidPointContext.js
    return (
        <CovidPointContext.Consumer>
            {({ point, onPointChange }) => {
                return (
                    <>
                        <p>Your COVID points: { point }</p>
                        <button onClick={() => increase(point, onPointChange) }>Increase</button>
                        <button onClick={() => decrease(point, onPointChange) }>Decrease</button>  
                    </>
                );
            }}
        </CovidPointContext.Consumer>
    );
}

// Method 2: Class Component

/*

class CovidPointExample extends React.Component {
    increase = (pt, change) => {
        change(pt + 1);
    }

    decrease = (pt, change) => {
        change(pt - 1);
    }

    render() {
        return (
            <CovidPointContext.Consumer>
                {({ point, onPointChange }) => {
                    return (
                        <>
                            <p>Your COVID points: { point }</p>
                            <button onClick={() => this.increase(point, onPointChange) }>Increase</button>
                            <button onClick={() => this.decrease(point, onPointChange) }>Decrease</button>  
                        </>
                    );
                }}
            </CovidPointContext.Consumer>
        );
    }
}

*/

export default CovidPointExample;