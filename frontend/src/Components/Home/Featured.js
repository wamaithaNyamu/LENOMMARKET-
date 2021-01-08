import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Image from 'material-ui-image'
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import HttpsRoundedIcon from "@material-ui/icons/HttpsRounded";
import { Link, Redirect } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    gen: {
        backgroundColor: theme.palette.background.paper,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    // chip: {
    //     margin: theme.spacing(0.5),
    // },
    section1: {
        margin: theme.spacing(2, 2),
    },
    section2: {
        margin: theme.spacing(1),
    },
    section3: {
        margin: theme.spacing(2, 1, 1),
    },
    card:{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(2, 2),
    },
    top:{
        margin: theme.spacing(2, 2),
        padding: theme.spacing(2,1,1,1),
        borderRadius: (0,0,0,10),
    }
}));

export default function MiddleDividers() {
    const classes = useStyles();

    return (
        <div >

            <Grid container  className={classes.gen} >
                <Grid container alignItems="center" className={classes.top}>
                    <Grid item xs>
                        <Typography gutterBottom  variant="h6">
                            Featured
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" >
                            <Link to="/catalog" style={{ textDecoration: 'none' }}>

                                View All &rarr;
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.card}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Image
                                        src="https://images-na.ssl-images-amazon.com/images/I/51keTVMdarL._SL1280_.jpg"/>
                                </Grid>

                            </Grid>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>

                            <div>

                                <Grid container spacing={1} >


                                    <Grid item  sm={12}>
                                         <Typography color="textSecondary" variant="body2">
                                            Toilet Sink Melanin Description
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={12}>
                                        <Chip className={classes.chip}
                                              color="primary"
                                              label="KSH 350" />
                                    </Grid>

                                </Grid>

                            </div>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.card}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Image
                                        src="https://images-na.ssl-images-amazon.com/images/I/51keTVMdarL._SL1280_.jpg"/>
                                </Grid>

                            </Grid>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>

                            <div>

                                <Grid container spacing={1} >


                                    <Grid item  sm={12}>
                                        <Typography color="textSecondary" variant="body2">
                                            Toilet Sink Melanin Description
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={12}>
                                        <Chip className={classes.chip}
                                              color="primary"
                                              label="KSH 350" />
                                    </Grid>

                                </Grid>

                            </div>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.card}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Image
                                        src="https://images-na.ssl-images-amazon.com/images/I/51keTVMdarL._SL1280_.jpg"/>
                                </Grid>

                            </Grid>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>

                            <div>

                                <Grid container spacing={1} >


                                    <Grid item  sm={12}>
                                        <Typography color="textSecondary" variant="body2">
                                            Toilet Sink Melanin Description
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={12}>
                                        <Chip className={classes.chip}
                                              color="primary"
                                              label="KSH 350" />
                                    </Grid>

                                </Grid>

                            </div>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div className={classes.card}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Image
                                        src="https://images-na.ssl-images-amazon.com/images/I/51keTVMdarL._SL1280_.jpg"/>
                                </Grid>

                            </Grid>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>

                            <div>

                                <Grid container spacing={1} >


                                    <Grid item  sm={12}>
                                        <Typography color="textSecondary" variant="body2">
                                            Toilet Sink Melanin Description
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={12}>
                                        <Chip className={classes.chip}
                                              color="primary"
                                              label="KSH 350" />
                                    </Grid>

                                </Grid>

                            </div>
                        </div>

                    </div>
                </Grid>
            </Grid>

        </div>
    );
}
