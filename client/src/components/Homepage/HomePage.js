import React from 'react';
import { Link } from 'react-router-dom';
import CovidPointContext from '../../contexts/CovidPointContext';

class HomePage extends React.Component {

  getRemainingPoints() {
    // TODO: Fetch the points of this user from the database.
    // Currently fetching from hardcoded context data.
    return (<CovidPointContext.Consumer>
      {({ point }) => {
        return (<p>{ point }</p>);
      }}
    </CovidPointContext.Consumer>);
  }

  getCovidCases() {
    let cases = 7
    // TODO: Link to external API to fetch cases in Victoria
    // TODO: Get the user's current location (ask permission)
    // and get the number of cases within a 5km radius
    return cases;
  }

  render() {
    return (
      <div>
        <div>
          <h1>CovFree</h1>
          <p>Decide what's essential for you.</p>
        </div>
        <div>
          <h2>My Points</h2>
          <p>{this.getRemainingPoints()}</p>
        </div>
        <div>
          <h2>Cases near me</h2>
          <p>{this.getCovidCases()}</p>
        </div>
        <div>
          <Link to="/checkin"><button>Check In</button></Link>
        </div>
      </div>
    )
  }
}

export default HomePage;
