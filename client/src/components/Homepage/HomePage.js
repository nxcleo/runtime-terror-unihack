import React from 'react';

class HomePage extends React.Component {

    printHelloWorld() {
        return "Hello World!";
    }


    // Class Components use render() to return the JSX code
    render() {
        return (
            <>
                <h1>{this.printHelloWorld()} I'm HomePage Component</h1>
            </>
        )
    }
}

export default HomePage;