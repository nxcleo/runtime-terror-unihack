import React from 'react';
const Context = React.createContext();

export class CovidPointStore extends React.Component {
    state = { point: 0 };

    onPointChange = point => {
        if (point < 0) point = 0;

        this.setState({ point });
    };

    render() {
        return (
            <Context.Provider value={{ ...this.state, onPointChange: this.onPointChange }}>
                { this.props.children }
            </Context.Provider>
        );
    };
}

export default Context;