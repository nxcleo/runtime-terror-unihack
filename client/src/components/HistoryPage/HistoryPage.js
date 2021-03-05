import React from 'react';

class HistoryPage extends React.Component {

    printHelloWorld() {
        return "Hello World!";
    }


    // Class Components use render() to return the JSX code
    render() {
        return (
            <>
                <h1>{this.printHelloWorld()} I'm HistoryPage Component</h1>
            </>
        )
    }
}

export default HistoryPage;