import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from "./carousel"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img:{
        height: '90%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: (0,0,0,10),

    }

}));

function generate(element) {
    return [0, 1, 2,3,4,5,6,7,8,9].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>

            <Grid container spacing={2}>
                <Hidden mdDown>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" className={classes.title}>
                        Categories
                    </Typography>
                    <div >
                        <List>
                            {generate(
                                <ListItem>

                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </div>
                </Grid>
                </Hidden>

                <Grid item xs={12} md={10}>
                    <div className={classes.img}>

                    <Carousel/>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}
