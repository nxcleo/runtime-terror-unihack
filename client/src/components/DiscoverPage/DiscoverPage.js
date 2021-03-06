import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardView from "../util/CardView";
import Icon from '@material-ui/core/Icon';




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
                "lat": -37.9219795,
                "lng": 145.083513
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
            href: "https://www.melbournecentral.com.au/home/",
            img: "/img/pt_mc.PNG",
            loc: {
                "lat": -37.9219795,
                "lng": 145.083513
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
                "lat": -37.9219795,
                "lng": 145.083513
            }
        },
        {
            id: 5,
            location: "Monash University",
            desc: "No case detected recently",
            base_cost: 30,
            time: "Last Week",
            href: "https://www.monash.edu/",
            img: "/img/pt_ms.PNG",
            loc: {
                "lat": -37.9219795,
                "lng": 145.083513
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
            navigator.geolocation.getCurrentPosition( (position) => {
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
            <Typography variant="h3" align="center" className={classes.title}>
                Discover Places
            </Typography>
            <hr /><br/>

            <Grid container spacing={4} direction="row" alignItems="stretch">
                {historyHardCoding().map(record => (
                    <Grid item key={record.id} xs={12} md={6}>
                        <CardView cardContent={
                            {
                                headerLabel: "Contact Cost: " + record.base_cost,
                                mainTitle: record.location,
                                subTitle: "",
                                desc: record.desc,
                                href: record.href,
                                linkText: "Details",
                                img: record.img
                            }
                        } >

                        </CardView>

                        <Button variant="contained" color="default"
                                href={"/checkin?place_selected=1&name="+ record.location + "&bc="+record.base_cost } target="_blank" >
                            Check in
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}

export default DiscoverPage;