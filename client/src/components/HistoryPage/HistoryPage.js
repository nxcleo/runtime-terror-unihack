import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CardView from '../util/CardView';

const historyHardCoding = () => {
    return [
        {
            id: 1,
            location: "Coles",
            desc: "No case detected recently",
            time: "Today"
        },
        {
            id: 2,
            location: "Woolworth",
            desc: "No case detected recently",
            time: "Today"
        },
        {
            id: 3,
            location: "Monash University",
            desc: "No case detected recently",
            time: "Last Week",
            href: "https://www.monash.edu/"
        }
    ];
}

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
            <Typography variant="h3" align="center" className={classes.title}>
                History Record
            </Typography>
            <hr /><br/>
            <Grid container spacing={4} direction="row" alignItems="stretch">
                {historyHardCoding().map(record => (
                    <Grid item key={record.id} xs={12} md={6}>
                        <CardView cardContent={
                            {
                                headerLabel: record.time,
                                mainTitle: record.location,
                                subTitle: "",
                                desc: record.desc,
                                href: record.href,
                                linkText: "Details"
                            }
                        } />
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}

export default HistoryPage;