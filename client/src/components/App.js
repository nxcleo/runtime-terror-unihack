import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../contexts/history';
import './App.css';

import NavBar from './NavBar';

import HomePage from './Homepage/HomePage';
import CheckinPage from './CheckinPage/CheckinPage';
import DiscoverPage from './DiscoverPage/DiscoverPage';
import HistoryPage from './HistoryPage/HistoryPage';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        
        <NavBar />

        <Router history={history}>
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/checkin" exact component={CheckinPage} />
              <Route path="/discover" exact component={DiscoverPage} />
              <Route path="/history" exact component={HistoryPage} />
              <Route path="/*" exact>
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>

      </div>
    );
  }
  
}

export default App;
