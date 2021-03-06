import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import CovidPointContext from '../../contexts/CovidPointContext';

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
                <div id="e4_106"><span id="e4_109">Welcome, Guest</span>
                    <div id="e4_311">
                        <div id="e4_312">
                            <div id="e4_313">
                                <div id="e4_314"></div>
                                <div id="e4_315"></div>
                                <div id="e4_316"></div>
                                <div id="e4_317"></div>
                            </div>
                        </div>
                    </div>
                    <div id="e9_1896"></div>
                    <div id="e20_2269">
                        <div id="e20_2211">
                            <a href="/discover">
                                <div id="e9_1560"></div>
                            </a>
                            <span id="e9_1561">Search Locations</span><span id="e9_1617">See the point cost of your essential locations.</span>
                            <div id="e20_2199">
                                <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>search</span>
                            </div>
                        </div>
                    </div>
                    <div id="e20_2232">
                        <div id="e20_2212">
                            <a href="/history">
                                <div id="e20_2213"></div>
                            </a>
                            <span id="e20_2214">Check-in History</span><span id="e20_2215">See the locations you checked into in the past.</span>
                        </div>
                    </div>
                    <div id="e20_2268">
                        <div id="e20_2239">
                            <div id="e20_2240">
                                <a href="/checkin">
                                    <div id="e20_2241"/>
                                </a>
                                <span id="e20_2242">Check-in </span><span id="e20_2243">Spend points on the locations essential to you</span>
                            </div>
                            <div id="e20_2244"></div>
                        </div>
                        <div id="e20_2261">
                            <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>task_alt</span>
                        </div>
                    </div>
                    <div id="e21_71">
                        <div id="e9_1605">
                            <div id="e9_1604"></div>
                            <span id="e9_1575">My Point Balance</span><span
                            id="e9_1593">Cases in Victoria today</span><span id="e21_96">Cases within 5km</span>
                            <div id="e9_1595">
                                <div id="e9_1599">
                                    <div id="e9_1596">
                                        <div id="ei9_1596_1_4"></div>
                                    </div>
                                    <span id="e9_1597">3</span></div>
                                <div id="e21_90">
                                    <div id="e21_91">
                                        <div id="ei21_91_1_4"></div>
                                    </div>
                                    <span id="e21_92">0</span></div>
                            </div>
                        </div>
                        <div id="e21_16">
                            <div id="e20_2272">
                                <div id="e20_2270"></div>
                                <div id="e20_2271"></div>
                            </div>
                            <CovidPointContext.Consumer>
                                {({ point, onPointChange }) => {
                                    return(<span id="e21_0">{point}</span>)
                                }}
                            </CovidPointContext.Consumer>
                        </div>
                    </div>
                    <div id="e20_2226">
                        <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>schedule</span>
                    </div>
                </div>
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
