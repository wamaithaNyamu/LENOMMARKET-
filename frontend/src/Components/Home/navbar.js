import React from 'react';
import { Link, Redirect } from "react-router-dom";

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import ListItemText from "@material-ui/core/ListItemText";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Badge from "@material-ui/core/Badge";


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
        width: 280,
    },
    fullList: {
        width: 'auto',
    },
    app:{
        backgroundColor:theme.palette.common.white,
        margin: theme.spacing(1, 1, 1, 1),
    },
    formatLink :{

        color: 'inherit',
        textDecoration: 'inherit',


    }

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

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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
    )
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">

                        <LockOpenIcon />

                </IconButton>
                <Link to="/Register"  color="textPrimary">Register/Login</Link>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">

                    <Link to="/cart"  color="textPrimary">

                        <ShoppingCartSharpIcon/>
                    </Link>

                </IconButton>

            </MenuItem>

        </Menu>



    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.app} elevation={0} >
                <Toolbar>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <IconButton
                                edge="start"
                                className={classes.sectionMobile}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(anchor, true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <MenuItem>
                            <IconButton >

                                <Link to="/cart"  color="textPrimary">

                                    <Badge badgeContent={4} color="error">
                                        <ShoppingCartSharpIcon />
                                    </Badge>
                                </Link>

                            </IconButton>

                        </MenuItem>
                        <MenuItem>
                            <IconButton >

                                <LockOpenIcon />

                            </IconButton>
                            <Link to="/Register"  color="textPrimary">Register/Login</Link>
                        </MenuItem>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </div>
    );
}
