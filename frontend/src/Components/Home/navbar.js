import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
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
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import {logout} from "../../actions/auth";
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

const Navbar = ({auth: { user, isAuthenticated, loading },logout}) => {
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


            <Divider />
            {isAuthenticated ? (
            <List>
                <Link to="/login"   style={{ textDecoration: 'none' }} color="textPrimary"></Link>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>

                <Link to="/login"   style={{ textDecoration: 'none' }} color="textPrimary"></Link>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingBasketRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItem>

                <Link to="/login"   style={{ textDecoration: 'none' }} color="textPrimary"></Link>
                <ListItem button>
                    <ListItemIcon>
                        <HistoryRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>

                <Link to="/"   style={{ textDecoration: 'none' }} color="textPrimary">

                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
                </Link>
            </List> ) : (
                <Link to="/login"   style={{ textDecoration: 'none' }} color="textPrimary">

                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>

                </List>
                </Link>

                )}

            <Typography component="h3" variant="h8" color="textSecondary" align="center">
                Company Info
            </Typography>
            <Divider />

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ContactPhoneRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LocationOnRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Store Locations" />
                </ListItem>

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
                <Link to="/login"   style={{ textDecoration: 'none' }} color="textPrimary">Login</Link>
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

                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </div>
    );
}
Navbar.propTypes = {

    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
