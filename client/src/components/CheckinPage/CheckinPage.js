import React, {useState} from 'react';

// import Scan from './Scan';
import QrReader from "react-qr-reader";
import CovidPointContext from '../../contexts/CovidPointContext';
// import "./CheckinPage.css";

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


const CheckinPage = () => {
    const [value, setValue] = useState({
        result: 'No result',
        place_selected: false,
        place_confirmed: false,
        qr_loaded: false,
        place_data: {'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name':'Woolworth', 'base_cost': 20}
    });

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
        temp.place_data = {'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name':'Woolworth', 'base_cost': 20};
        setValue(temp);
        console.log(value);
    };

    const getQR = () => {
        if (!value.qr_loaded) {
            return (<QrReader
                delay={250}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
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
                    <div>
                        {getQR()}
                    </div>

                    <a href="/home">
                        <button>
                            Cancel
                        </button>
                    </a>

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
                    {({ point, onPointChange }) => {
                        if (point >= cost){
                            return (
                                <>
                                    <p>Selected Location: {value.place_data ? value.place_data.name : ""}</p>
                                    <p>Cost: {cost}</p>
                                    <p>Your Current Contact Points: { point }</p>

                                    <a href="/home">
                                        <button>
                                            Cancel
                                        </button>
                                    </a>
                                    <button onClick={() => { decreasePoint(point, onPointChange, cost) }}>Confirm</button>
                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <p>You don't have sufficient Contact Points to visit this location!</p>
                                    <p>But this is a demo, so you can just reset points here.</p>
                                    <button onClick={() => { onPointChange(100) }}>Reset Covid Points</button>
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
                    <p> </p>
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
        <>
            <h1>Location Checkin</h1>

            <div>
                {getPage()}
            </div>
        </>
    )
}

export default CheckinPage;