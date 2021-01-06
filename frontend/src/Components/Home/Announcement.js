import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    inputCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },


}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div >
            <AppBar position="static" elevation={0}>
                <Toolbar className={classes.inputCenter}>

                    <Typography variant="h8" align="center">
                       Did you know you earn loyalty points every time you shop with us?

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
