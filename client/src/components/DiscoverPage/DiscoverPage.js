import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import './discover_styles.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 30
    },
    title: {
        margin: 30
    },
}));

const historyHardCoding = () => {
    return [
        {
            id: 1,
            location: "Chadstone SC",
            desc: "Chadstone VIC 3148, Australia",
            base_cost: 25,
            time: "Today",
            img: "/img/pt_chadstone.PNG",
            loc: {
                "lat": -37.8858532,
                "lng": 145.0847703
            }
        },
        {
            id: 2,
            location: "Woolworth",
            desc: "Oakleigh South VIC 3167, Australia",
            base_cost: 15,
            time: "Today",
            img: "/img/pt_wool.PNG",
            loc: {
                "lat": -37.9219795,
                "lng": 145.083513
            }
        },
        {
            id: 3,
            location: "Melbourne Central",
            desc: "Cnr La Trobe St &, Swanston St, Melbourne VIC 3000, Australia",
            base_cost: 15,
            time: "T",
            img: "/img/pt_mc.PNG",
            loc: {
                "lat": -37.8102361,
                "lng": 144.9627652
            }
        },
        {
            id: 4,
            location: "ANZ Branch Docklands",
            desc: "833 Collins St, Docklands VIC 3008, Australia",
            base_cost: 40,
            time: "Last Week",
            img: "/img/pt_chadstone.PNG",
            loc: {
                "lat": -37.8219332,
                "lng": 144.9455145
            }
        },
        {
            id: 5,
            location: "Monash University",
            desc: "Wellington Rd, Clayton VIC 3800, Australia",
            base_cost: 30,
            time: "Last Week",
            img: "/img/pt_ms.PNG",
            loc: {
                "lat": -37.9109574,
                "lng": 145.1371751
            }
        }
    ];
};

const DiscoverPage = (props) => {
    const [results, setResults] = useState([
        {
            id: 1,
            location: "Coles",
            desc: "No case detected recently",
            time: "Today"
        }
    ]);
    const [key, setKey] = useState("AIzaSyB4NWVau1fozKFiTFqsIupLnUMq3aS-7f0");
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    function updateResults(location_string) {
        let api_url = "/placesearch?";
        api_url = api_url + location_string + "&";
        api_url = api_url + "key=" + key + "&";
        api_url = api_url + "query=" + query;
        console.log(api_url);
        fetch(api_url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setResults(result);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                }
            );
    }


    function updateResultsByLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                updateResults("location=" + position.coords.latitude + "," + position.coords.longitude)
            });
        } else {
            updateResults("");
        }
    }

    function searchHandler() {
        setResults([]);
        console.log(query);
        updateResultsByLocation();
    }


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div id="e60_7"><span id="e60_8">Discover Places</span><span id="e60_9">40</span>
                <div id="e60_12">
                    <a href="/home">
                        <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>home</span>
                    </a>
                </div>
                <div id="e60_13">
                    <Grid container spacing={4} direction="row" alignItems="stretch">
                        {historyHardCoding().map(record => (
                            <Grid item key={record.id} xs={12} md={6} style={{"height": "280px"}}>

                                <div className="de60_17">
                                    <div className="dei60_17_3_471">
                                        <span className="dei60_17_3_473">{record.location}</span>
                                        <span className="dei60_17_3_475" style={{"top": "50px"}}>{record.desc}</span>
                                        <img className="dei60_17_3_476" src={record.img}/>
                                        <a className="dei60_17_3_478" href={
                                            "/checkin?place_selected=1&" +
                                                "place_id="+ record.id + "&" +
                                                "name="+ record.location + "&" +
                                                "base_cost="+ record.base_cost + "&" +
                                                "lat="+ record.loc.lat + "&" +
                                                "lng="+ record.loc.lng + "&" +
                                                "desc="+ record.desc

                                        }>
                                            <div className="de9_1081">
                                                <div className="de9_1079"></div>
                                                <span className="de9_1080">Check-in</span></div>
                                        </a>
                                        <div className="de60_18">
                                            <div className="de60_19">
                                                <div className="de60_20"></div>
                                                <span className="de60_21">{record.base_cost}</span></div>
                                        </div>

                                    </div>
                                </div>

                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );

}

export default DiscoverPage;