import React from 'react';

class HomePage extends React.Component {

  getRemainingPoints() {
    let points = 30;
    // TODO: Fetch the points of this user from the database.
    return points;
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
          <button>Check In</button>
        </div>
      </div>
    )
  }
}

export default HomePage;
