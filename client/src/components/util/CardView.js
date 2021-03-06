import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// Usage: <CardView cardContent={objVariableName} />

// Example Object:
//     cardContent: {
//         headerLabel: "Last Updated",
//         mainTitle: "Project Name",
//         subTitle: "Main language:",
//         desc: "describtion",
//         href: "www.google.com",
//         linkText: "Click me"
//     }
//

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 20,
        paddingTop: 4
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const generateButton = (cardContent) => {
    if (cardContent.href) {
        return (
            <CardActions>
                <Button variant="contained" color="default" size="small" 
                    href={cardContent.href} target="_blank" >
                        {cardContent.linkText ? cardContent.linkText : "Link"}
                </Button>
            </CardActions>
        );
    }
}

const CardView = (props) => {
    const classes = useStyles();
    const { cardContent } = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cardContent.headerLabel}
                </Typography>
                <Typography variant="h5" component="h2">
                    {cardContent.mainTitle}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cardContent.subTitle}
                </Typography>
                <Typography variant="body2" component="p">
                    {cardContent.desc}
                </Typography>
            </CardContent>
            { generateButton(cardContent) }
        </Card>
    );
    
}

export default CardView;