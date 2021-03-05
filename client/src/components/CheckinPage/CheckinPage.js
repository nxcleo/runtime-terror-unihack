import React, {useState} from 'react';

import Scan from './Scan';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import DiscoverPage from "../DiscoverPage/DiscoverPage";
import HistoryPage from "../HistoryPage/HistoryPage";



const CheckinPage = () => {
    const [value, setValue] = useState({
        result: '',
        place_selected: false
    });


    const OnSelect = () => {
        setValue({
            result: "{'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw'}",
            place_selected: true
        });
        console.log(value);
    };

    const getPage = () => {
        if (!value.place_selected) {
            return (
                <div>
                    <p>wtf</p>
                    {Scan}

                    <a href="/home">
                        <button>
                            Cancel
                        </button>
                    </a>

                    <button onClick={OnSelect}>
                        Select
                    </button>
                </div>


            )
        }
        else {
            return (
                <p>Selected Location: {value.result}</p>

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

// class CheckinPage extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             result: '',
//             place_selected: false
//         };
//
//     }
//
//     printHelloWorld() {
//         return "Hello World!";
//     }
//
//     OnSelect() {
//         this.setState({
//             result: "{'place_id': 'ChIJk-DqctZr1moRaUtrILlx2Hw'}",
//             place_selected: true
//         });
//         console.log(this.state);
//     }
//
//     getPage() {
//         if (!this.state.place_selected) {
//             return (
//                 <div>
//                     <p>wtf</p>
//                     {Scan}
//
//                     <a href="/home">
//                         <button>
//                             Cancel
//                         </button></a>
//
//                     <button onClick={this.OnSelect}>
//                         Select
//                     </button>
//                 </div>
//
//
//             )
//         }
//         else {
//             return (
//                 <p>Selected Location: {this.state.result}</p>
//
//             )
//         }
//     }
//
//
//     // Class Components use render() to return the JSX code
//     render() {
//         return (
//             <>
//                 <h1>{this.printHelloWorld()} I'm Checkin Page Component</h1>
//
//                 <div>
//                     {this.getPage()}
//                 </div>
//             </>
//         )
//     }
// }

export default CheckinPage;