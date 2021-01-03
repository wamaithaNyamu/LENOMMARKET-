import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FabCart from "./fabIcon"
import Navbar from "./navbar"
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            WEA INTL.
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default function SearchAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,

    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (

        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />

            <Typography component="h3" variant="h5" color="textSecondary" align="center">
                CATEGORIES
            </Typography>

            <Divider />

            <List>
                {['Blades', 'Conduits', 'Fittings', 'Glues','Grattings','Pipes','Sinks','Tanks','Toilets',].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{<CategoryRoundedIcon /> }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography component="h2" variant="h5" color="textSecondary" align="center">
                COMPANY INFO
            </Typography>
            <Divider />

            <List>
                {['About US', 'Contact US', 'Delivery Policy','Payment Policy'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{<InfoRoundedIcon /> }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box mt={8}>
                <Copyright />
            </Box>

        </div>
    );

    return (
        <Container  fixed>
            <div className={classes.root} >
                <Navbar/>
                <FabCart/>


            </div>
        </Container>
    );
}
