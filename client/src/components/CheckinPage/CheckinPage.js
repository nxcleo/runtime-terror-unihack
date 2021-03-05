import React, {useState} from 'react';

// import Scan from './Scan';
import QrReader from "react-qr-reader";

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
        qr_loaded: false,
        place_data: null
    });

    const handleScan = (data) => {
        if (data && data[0] === "{" && data[data.length - 1] === "}") {

            setValue({
                result: data,
                place_selected: true,
                place_data: JSON.parse(data)
        });

        }
    }

    const handleError = (err) => {
        console.error(err)
    }

    const readerLoaded = (object) => {
        setValue({
            qr_loaded: true
        });
    }


    const OnSelect = () => {
        setValue({
            result: "{'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name':'Woolworth'}",
            place_selected: true
        });
        console.log(value);
    };


    const OnConfirm = () => {
        setValue({
            result: "{'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw', 'name':'Woolworth'}",
            place_selected: true
        });
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
        // else{
        //
        //     return (
        //         <>
        //         <QrReader
        //             delay={250}
        //             onError={handleError}
        //             onScan={handleScan}
        //             style={{ width: '10%' }}
        //             onload={readerLoaded}
        //         />
        //         <h1>Loading...</h1>
        //        </>
        //     )
        // }
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

                    <button onClick={OnSelect}>
                        Test Select
                    </button>
                </div>
            )
        }
        else {
            return (
                <>
                    <p>Selected Location: {value.place_data.name}</p>
                    <p>Cost: {value.place_data.base_cost}</p>

                    <a href="/home">
                        <button>
                            Cancel
                        </button>
                    </a>

                    <button onClick={OnConfirm}>
                        Confirm
                    </button>
                </>
            )
        }
    };

    return (
        <>
            <h1>I'm Checkin Page Component</h1>

            <div>
                {getPage()}
            </div>
        </>
    )
}

export default CheckinPage;