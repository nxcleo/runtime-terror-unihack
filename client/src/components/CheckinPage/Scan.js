import React from 'react';
import QrReader from 'react-qr-reader';

// Example of Class Component

class Scan extends React.Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data && data[0] === "{" && data[data.length - 1] === "}") {
            this.setState({
                result: data
            })

        }
    }
    handleError = err => {
        console.error(err)
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={250}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>

            </div>
        )
    }
}
export default Scan;