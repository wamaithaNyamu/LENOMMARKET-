import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/CategoryRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
    gen:{
        margin:theme.spacing(1),
    },
    cat: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div >

            <Typography variant="h6" align="center" className={classes.gen}>
                Why Choose Us?
            </Typography>

            <Grid container spacing={1} className={classes.gen} >


                <Grid item xs={6} sm={3}>
                    <Chip
                        icon={<LocalShippingRoundedIcon />}
                        label="Countrywide Delivery"

                        clickable
                        color="primary"

                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Chip
                        icon={<EmojiEmotionsRoundedIcon />}
                        label="Aftersale Services"
                        clickable
                        color="primary"

                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Chip
                        icon={<AccountBalanceWalletRoundedIcon />}
                        label="Best Prices"
                        clickable
                        color="primary"

                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Chip
                        icon={<HttpsRoundedIcon />}
                        label="Secure Payments"
                        clickable
                        color="primary"

                    />
                </Grid>
            </Grid>
        </div>
    );
}
