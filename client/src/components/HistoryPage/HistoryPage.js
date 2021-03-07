import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CardView from '../util/CardView';
import HistoryContext from '../../contexts/HistoryContext';
import './styles.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 30
    },
    title: {
        margin: 30
    },
}));

const HistoryPage = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div id="e60_7"><span id="e60_8">History Record</span><span id="e60_9">40</span>
                <div id="e60_12">
                    <a href="/home">
                        <span className="material-icons" style={{"font-size": "xxx-large", color: "rgba(3, 4, 94, 1)"}}>home</span>
                    </a>
                </div>
                <div id="e60_13">
                    <Grid container spacing={1} direction="row" alignItems="stretch">
                        <HistoryContext.Consumer>
                            { ({ records }) => {
                                console.log(records)
                                return records.map(record => (
                                    <Grid item key={record.id} xs={12} md={6}>

                                        <div className="e60_17">
                                            <div className="ei60_17_3_471">
                                                <span className="ei60_17_3_473">{record.location}</span>
                                                <span className="ei60_17_3_475">You checked in on {record.time}</span>
                                                <span className="ei60_17_3_475" style={{"top": "50px"}}>{record.desc}</span>
                                                <span
                                                className="ei60_17_3_477">There are no current outbreaks at this location</span>

                                                <div className="e60_18">
                                                    <div className="e60_19">
                                                        <div className="e60_20"/>
                                                        <span className="e60_21">{record.base_cost}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </Grid>
                                ))
                            }}
                        </HistoryContext.Consumer>
                    </Grid>




                </div>
            </div>


        </div>
    );

}

export default HistoryPage;