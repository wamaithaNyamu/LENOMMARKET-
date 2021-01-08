import React from "react";
import { logout } from "../../../actions/auth"
import { Link  } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import StoreIcon from '@material-ui/icons/Store';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import logoutIcon from "../../../img/logout.svg"
import shopIcon from "../../../img/shop.svg"
import orderIcon from "../../../img/order.svg"
import profileIcon from "../../../img/profile.svg"
import Image from 'material-ui-image'
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    b:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: theme.spacing(2, 2,5,1),
        padding:theme.spacing(2, 2,5,1),
    },
    c:{

        paddingTop:100,
        maxWidth: '400px',



    },
    root: {

        margin: theme.spacing(2, 2),
        padding:theme.spacing(2, 2),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    pos: {

    },
    media:{

        margin: theme.spacing(2, 2),
        padding:theme.spacing(2, 2),

    }
}));

const Dashboard = ({auth: { user, isAuthenticated, loading }, logout}) => {
    const classes = useStyles();
    return (
        <div className={classes.b}>


        <Container className={classes.c} >
            <Typography variant="h6" component="p" >
                Hello {user.name},

            </Typography>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6} elevation={0} className={classes.pos}>
                    <Link to="/" style={{ textDecoration: 'none' }}>


                        <Card>

                            <Typography variant="h7" component="p" align="center">
                                Go back to shop

                            </Typography>
                            <div className={classes.media}>
                                <Image src={shopIcon}/>
                            </div>


                        </Card>


                    </Link>
                </Grid>


                <Grid item xs={12} sm={6} md={6} elevation={0} className={classes.pos}>

                    <Link to="/orders" style={{ textDecoration: 'none' }}>

                        <Card>

                            <Typography variant="h7" component="p" align="center">
                                Order History

                            </Typography>
                            <div className={classes.media}>
                                <Image src={orderIcon}/>
                            </div>


                        </Card>


                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} elevation={0} className={classes.pos}>

                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <Card>

                        <Typography variant="h7" component="p" align="center">
                            Profile

                        </Typography>
                        <div className={classes.media}>
                            <Image src={profileIcon}/>
                        </div>


                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} elevation={0} className={classes.pos}>

                    <Link  style={{ textDecoration: 'none' }}to="/">

                        <Card onClick={logout}>


                                <Typography variant="h7" component="p" align="center">
                                    Logout

                                </Typography>
                                <div className={classes.media}>
                                    <Image src={logoutIcon}/>
                                </div>


                            </Card>


                    </Link>
                </Grid>
            </Grid>

        </Container>
        </div>
    );
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Dashboard);
