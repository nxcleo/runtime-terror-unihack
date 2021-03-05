import React from 'react';

// Example of Class Component
class Example extends React.Component {

    printHelloWorld() {
        return "Hello World!";
    }


    // Class Components use render() to return the JSX code
    render() {
        return (
            <>
                <h1>{this.printHelloWorld()} I'm Example Component</h1>
            </>
        )
    }
}

export default Example;