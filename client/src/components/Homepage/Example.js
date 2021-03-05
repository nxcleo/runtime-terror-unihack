import React from 'react';
import QrReader from 'react-qr-reader'
import Scan from "../CheckinPage/Scan";

// Example of Class Component

class Scanner extends React.Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
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
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
                <div>
                    {Scan}
                </div>
            </div>
        )
    }
}
export default Scanner;