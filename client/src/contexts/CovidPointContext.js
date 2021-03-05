import React from 'react';
import Cookies from 'universal-cookie';
const Context = React.createContext();
const cookies = new Cookies();

export class CovidPointStore extends React.Component {
    state = { point: 0 };

    componentDidMount() {
        const covid_point_cookie = cookies.get('covid-point');
        if (covid_point_cookie) {
            this.onPointChange(Number(covid_point_cookie));
        }
    }

    onPointChange = point => {
        if (point < 0) point = 0;

        this.setState({ point });
        cookies.set('covid-point', point, { path: '/' });
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