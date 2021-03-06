import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import './styles.css';

import GoogleApiWrapper from './gmap';

// import Scan from './Scan';
import QrReader from "react-qr-reader";
import CovidPointContext from '../../contexts/CovidPointContext';

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


const CheckinPage = () => {
    const search = useLocation().search;
    const place_selected = new URLSearchParams(search).get('place_selected');
    let name = new URLSearchParams(search).get('name');
    let bc = new URLSearchParams(search).get('bc');
    const [value, setValue] = useState({
        result: 'No result',
        place_selected: place_selected,
        place_confirmed: false,
        qr_loaded: false,
        place_data: {'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name': name, 'base_cost': Number(bc)}
    });

    // console.log(place_selected);
    // if (place_selected) {
    //     console.log(name);
    //     console.log(bc);
    //     let temp = {...value};
    //     temp.place_selected = true;
    //     temp.place_data = {'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name':name, 'base_cost': Number(bc)};
    //     setValue(temp);
    // }

    const handleScan = (data) => {
        if (data && data[0] === "{" && data[data.length - 1] === "}") {
            let temp = {...value};
            temp.result = data;
            temp.place_selected = true;
            temp.place_data = JSON.parse(data);
            setValue(temp);

        }
    }

    const handleError = (err) => {
        console.error(err)
    }

    const readerLoaded = (object) => {
        let temp = {...value};
        temp.qr_loaded = true;
        setValue(temp);
    }


    const testSelect = () => {
        let temp = {...value};
        temp.place_selected = true;
        temp.place_data = {'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name': 'Woolworth', 'base_cost': 20};
        setValue(temp);
        console.log(value);
    };

    const getQR = () => {
        if (!value.qr_loaded) {
            return (<QrReader
                delay={250}
                onError={handleError}
                onScan={handleScan}
                style={{width: '100%'}}
                onload={readerLoaded}
            />)
        }
    }

    const decreasePoint = (point, onPointChange, cost) => {
        onPointChange(point - cost);
        let temp = {...value};
        temp.place_confirmed = true;
        setValue(temp);
    }

    const getPage = () => {
        if (!value.place_selected) {
            return (
                <div>
                    <div id="e9_1015"><span id="e9_1018">Check In</span><span id="e9_1019">􀆉</span><span id="e9_1069">Position the QR Code in the frame</span>
                        <div id="e4_194">
                            <div id="e4_195">
                                <div id="e4_196">
                                    <div id="e4_197">
                                        <div id="e4_198"></div>
                                        <div id="e4_199"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/home">
                            <div id="e9_1081">
                                <div id="e9_1079"></div>
                                <span id="e9_1080">Cancel</span></div>
                            <div id="e9_1720">
                                <div id="e9_1719"></div>
                                <div id="e9_1717">{getQR()}</div>
                            </div>
                        </a>
                    </div>
                    <button onClick={testSelect}>
                        Test Select
                    </button>
                </div>
            )
        }
        else if (!value.place_confirmed) {
            let cost = value.place_data.base_cost;
            return (
                <CovidPointContext.Consumer>
                    {({point, onPointChange}) => {
                        if (point >= cost) {
                            return (
                                <>
                                    <div id="e9_1217"><span id="e9_1221">􀆉</span>
                                        <div id="e9_1223">
                                            <div id="ei9_1223_4_195">
                                                <div id="ei9_1223_4_196">
                                                    <div id="ei9_1223_4_197">
                                                        <div id="ei9_1223_4_198"></div>
                                                        <div id="ei9_1223_4_199"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="e9_1224">
                                            <div id="e9_1225"></div>
                                            <span id="e9_1226">Check In</span></div>
                                        <div id="e4_1719">
                                            <div id="e9_1236">
                                                <div id="ei9_1236_3_471"></div>
                                                <div id="ei9_1236_3_472">
                                                    <div id="ei9_1236_3_472_1_75"></div>
                                                </div>
                                                <span id="ei9_1236_3_473">North Melbourne Pool</span>
                                                <div id="ei9_1236_3_474">
                                                    <div id="ei9_1236_3_474_1_4"></div>
                                                </div>
                                                <span
                                                    id="ei9_1236_3_475">Swimming pool in North Melbourne, Victoria</span><span
                                                id="ei9_1236_3_477">There are current no outbreaks at this location.</span>
                                            </div>
                                            <span id="e9_1267">10</span></div>
                                        <span id="e9_1278">Point balance after check-in : 15</span>
                                        <div id="e9_1737">
                                            <div id="ei9_1737_4_195">
                                                <div id="ei9_1737_4_196">
                                                    <div id="ei9_1737_4_197">
                                                        <div id="ei9_1737_4_198"></div>
                                                        <div id="ei9_1737_4_199"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="e9_1738">
                                            <div id="e9_1739"></div>
                                            <span id="e9_1740">Check In</span></div>
                                        <div id="e9_1741">
                                            <div id="e9_1742">
                                                <div id="ei9_1742_3_471"></div>
                                                <div id="ei9_1742_3_472">
                                                    <div id="ei9_1742_3_472_1_75">
                                                        <GoogleApiWrapper/>
                                                    </div>
                                                </div>
                                                <span id="ei9_1742_3_473">North Melbourne Pool</span>
                                                <div id="ei9_1742_3_474">
                                                    <div id="ei9_1742_3_474_1_4"></div>
                                                </div>
                                                <span
                                                    id="ei9_1742_3_475">Swimming pool in North Melbourne, Victoria</span><span
                                                id="ei9_1742_3_477">There are currently no outbreaks related to this location</span>
                                            </div>
                                            <span id="e9_1743">20</span></div>
                                    </div>
                                    <p>Selected Location: {value.place_data ? value.place_data.name : ""}</p>
                                    <p>Cost: {cost}</p>
                                    <p>Your Current Contact Points: {point}</p>

                                    <a href="/home">
                                        <button>
                                            Cancel
                                        </button>
                                    </a>
                                    <button onClick={() => {
                                        decreasePoint(point, onPointChange, cost)
                                    }}>Confirm
                                    </button>
                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <p>You don't have sufficient Contact Points to visit this location!</p>
                                    <p>But this is a demo, so you can just reset points here.</p>
                                    <button onClick={() => {
                                        onPointChange(100)
                                    }}>Reset Covid Points
                                    </button>
                                </>
                            )
                        }

                    }}
                </CovidPointContext.Consumer>
            )
        }
        else {
            let api_addr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
            let d = new Date();
            api_addr = api_addr + JSON.stringify({
                'place_id': value.place_data.place_id,
                'time': d.getTime()
            });
            console.log(api_addr);

            return (
                <>
                    <h2>Check in Success!</h2>
                    <p>Please show the staff this QR code to enter.</p>
                    <div className="loader"/>
                    <img src={api_addr}/>
                    <p></p>
                    <a href="/home">
                        <button>
                            Complete
                        </button>
                    </a>
                </>
            )
        }
    };

    return (
        <div>
            {getPage()}
        </div>
    )
}

export default CheckinPage;