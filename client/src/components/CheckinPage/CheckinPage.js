import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import './styles.css';

import GoogleApiWrapper from './gmap';

// import Scan from './Scan';
import QrReader from "react-qr-reader";
import CovidPointContext from '../../contexts/CovidPointContext';
import HistoryContext from "../../contexts/HistoryContext";

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

    let place_id = new URLSearchParams(search).get('place_id');
    let name = new URLSearchParams(search).get('name');
    let base_cost = new URLSearchParams(search).get('base_cost');
    let lat = new URLSearchParams(search).get('lat');
    let lng = new URLSearchParams(search).get('lng');
    let desc = new URLSearchParams(search).get('desc');
    let place_dat = place_selected ? {
        name: name,
        base_cost: base_cost,
        loc: {lat: lat, lng: lng},
        desc: desc
    } : {} ;
    console.log(JSON.stringify(place_dat));

    const [value, setValue] = useState({
        result: 'No result',
        place_selected: place_selected,
        place_confirmed: false,
        qr_loaded: false,
        place_data: place_dat
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
        temp.place_data = {
            'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name': 'Woolworth', 'base_cost': 20, loc: {
                "lat": -37.9109574,
                "lng": 145.1371751
            }
        };
        setValue(temp);
        console.log(value)
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

    const decreasePoint = (point, onPointChange, cost, addItem) => {

        onPointChange(point - cost);
        let d = new Date();
        addItem({
            id: value.place_data.place_id,
            location: value.place_data.name,
            desc: value.place_data.desc,
            base_cost: value.place_data.base_cost,
            time: d.toDateString(),
        });
        let temp = {...value};
        temp.place_confirmed = true;
        setValue(temp);

    }

    const getConfirmation = (point) => {
        if (value.place_confirmed) {
            let api_addr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
            let d = new Date();
            api_addr = api_addr + JSON.stringify({
                'place_id': value.place_data.place_id,
                'time': d.getTime()
            });
            return (
                <>
                    <div id="e9_1809"></div>
                    <div id="e9_1810">
                        <div id="ei9_1810_9_1169">
                            <div id="ei9_1810_9_1169_7_225"></div>
                            <span id="confirm_qr_loading">Loading</span>
                            <img id="confirm_qr" src={api_addr}/>
                            <span id="ei9_1810_9_1169_7_231">Please show the staff this QR code to enter.</span>
                            <span
                            id="ei9_1810_9_1169_7_235">Check In Successful</span>
                        </div>
                        <div id="ei9_1810_9_1139">
                            <a href="/home">
                                <div id="ei9_1810_9_1140"></div>
                                <span id="ei9_1810_9_1141">Back to Home</span>
                            </a>
                        </div>
                    </div>
                </>

            )
        } else
            return (<> </>)
    }

    const getCheckinComp = (point, cost, onPointChange, addItem) => {
        if (point >= cost) {
            return (
                <>
                    <span id="e9_1278">Point balance after check-in : {point - value.place_data.base_cost}</span>
                    <div id="e9_1738" onClick={() => {decreasePoint(point, onPointChange, cost, addItem)}}>
                        <div id="e9_1739" />
                        <span id="e9_1740">Check In</span>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <span id="e9_1278">Insufficient point balance of : {point} </span>
                    <div id="e9_1738">
                        <div id="e9_1739" style={{"background": "gray"}}/>
                        <span id="e9_1740" >Check-in</span>
                    </div>
                </>
            )
        }
    }

    const getPage = () => {
        if (!value.place_selected) {
            return (
                <div>
                    <div id="e9_1015"><span id="e9_1018">Check In</span><span id="e9_1069">Position the QR Code in the frame</span>
                        <div id="e4_194">
                            <a href="/home">
                                <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>home</span>
                            </a>
                            </div>
                        <a href="/home">
                            <div id="e9_1081">
                                <div id="e9_1079"></div>
                                <span id="e9_1080">Cancel</span></div>
                        </a>
                        <div id="e9_1720">
                            <div id="e9_1719"></div>
                            <div id="e9_1717">{getQR()}</div>
                        </div>
                    </div>
                    <button onClick={testSelect}>
                        Test Select
                    </button>
                </div>
            )
        }
        else {
            let cost = value.place_data.base_cost;
            return (
                <CovidPointContext.Consumer>
                    {({point, onPointChange}) => {
                        if (true) {
                            return (
                                <>
                                    <div id="e9_1217">
                                        <a href="/home">
                                            <span id="e9_1221" className="material-icons" style={{
                                                "font-size": "xxx-large",
                                                color: "rgba(3, 4, 94, 1)"
                                            }}>cancel_presentation</span>
                                        </a>
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
                                        <HistoryContext.Consumer>
                                            {({ addItem, resetRecord }) => {
                                                return getCheckinComp(point, cost, onPointChange, addItem)
                                            }}
                                        </HistoryContext.Consumer>
                                        <div id="e9_1741">
                                            <div id="e9_1742">
                                                <div id="ei9_1742_3_471"></div>
                                                <div id="ei9_1742_3_472">
                                                    <div id="ei9_1742_3_472_1_75">
                                                        <GoogleApiWrapper place_data={value.place_data}/>
                                                    </div>
                                                </div>
                                                <span id="ei9_1742_3_473">{value.place_data.name}</span>
                                                <div id="ei9_1742_3_474">
                                                    <div id="ei9_1742_3_474_1_4"></div>
                                                </div>
                                                <span
                                                    id="ei9_1742_3_475">{value.place_data.desc}</span><span
                                                id="ei9_1742_3_477">There are currently no outbreaks related to this location</span>
                                            </div>
                                            <span id="e9_1743">{value.place_data.base_cost}</span></div>
                                        {getConfirmation(point)}
                                    </div>

                                </>
                            );
                        }
                        // else {
                        //     return (
                        //         <>
                        //             <p>You don't have sufficient Contact Points to visit this location!</p>
                        //             <p>But this is a demo, so you can just reset points here.</p>
                        //             <button onClick={() => {
                        //                 onPointChange(100)
                        //             }}>Reset Covid Points
                        //             </button>
                        //         </>
                        //     )
                        // }

                    }}
                </CovidPointContext.Consumer>
            )
        }
        // else {
        //     let api_addr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
        //     let d = new Date();
        //     api_addr = api_addr + JSON.stringify({
        //         'place_id': value.place_data.place_id,
        //         'time': d.getTime()
        //     });
        //     console.log(api_addr);
        //
        //     return (
        //         <>
        //             <h2>Check in Success!</h2>
        //             <p>Please show the staff this QR code to enter.</p>
        //             <div className="loader"/>
        //             <img src={api_addr}/>
        //             <p></p>
        //             <a href="/home">
        //                 <button>
        //                     Complete
        //                 </button>
        //             </a>
        //         </>
        //     )
        // }
    };

    return (
        <div>
            {getPage()}
        </div>
    )
}

export default CheckinPage;