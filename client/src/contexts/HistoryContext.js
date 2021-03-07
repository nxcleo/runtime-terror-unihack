import React from 'react';
import Cookies from 'universal-cookie';
const Context = React.createContext();
const cookies = new Cookies();

export class HistoryStore extends React.Component {
    state = { records: [] };

    componentDidMount() {
        const history_cookie = cookies.get('history-record');
        if (history_cookie) {
            this.addItems(history_cookie);
        }
    }

    addItem = item => {
        this.state.records.push(item);
        this.setState({ records: this.state.records }); // Using setState to refresh DOM
        cookies.set('history-record', this.state.records, { path: '/' });
    }

    addItems = items => {
        items.forEach(item => this.addItem(item));
    };

    removeById = id => {
        this.setState({records: this.state.records.filter(record => record.id == id)});
        cookies.set('history-record', this.state.records, { path: '/' });
    }

    resetRecord = () => {
        this.setState({records: []});
        cookies.set('history-record', this.state.records, { path: '/' });
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state, 
                addItem: this.addItem,
                addItems: this.addItems,
                removeById: this.removeById,
                resetRecord: this.resetRecord
            }}>
                { this.props.children }
            </Context.Provider>
        );
    };
}

export default Context;