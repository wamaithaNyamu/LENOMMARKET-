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
            <AppBar position="static">
                <Toolbar className={classes.inputCenter}>

                    <Typography variant="h6" align="center">
                        This will be an announcement!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
