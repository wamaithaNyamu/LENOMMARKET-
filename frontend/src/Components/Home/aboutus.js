import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import aboutImg from '../../img/about.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        minHeight: 250,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img:{
        width:'100%',
        maxHeight:'100%'
    },
    gen: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    bread:{
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    cat:{
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
    },
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

    },

}));

export default function Cart() {
    const classes = useStyles();


    return (
        <React.Fragment>

            <Container >
                <div className={classes.bread}>

                        <Link to="/" style={{ textDecoration: 'none' }} >
                            Back Home
                        </Link>


                </div>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={8}>

                        <Typography align="center" variant="h4" >
                            ABOUT US
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Established in 2016, WEA International is a distributor of plumbing and electrical materials and supplies that has grown tenfold in terms of revenues over the last three years. In terms of head count, we have grown from a staff complement of 5 to 40.
                            We have established a strong market footing with four branches translating into revenues of over KES180M a year.

                        </Typography>

                        <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Purpose
                                    </Typography>

                                    <Typography className={classes.pos} color="textSecondary">
                                        Our goal is to provide the highest level of service, the broadest selection of products and at the most competitive prices. To continually re-engineer and innovate, to be at the forefront of new developments in the hardware industry.

                                    </Typography>

                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Mission
                                    </Typography>

                                    <Typography className={classes.pos} color="textSecondary">
                                        WEA prides itself on its reputation for quality products. We aim to deliver products and services conforming to International standards and satisfying the requirements and the expectations of our customers with respect to quality, cost, performance, safety and reliability.

                                    </Typography>

                                </CardContent>

                            </Card>
                        </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Vision
                                    </Typography>

                                    <Typography className={classes.pos} color="textSecondary">
                                        To become the hardware, electricals and irrigation materials supplier of choice in East Africa, delivering premium products and services, and creating unparalleled value for our customers

                                    </Typography>

                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Values
                                    </Typography>

                                    <Typography className={classes.pos} color="textSecondary">
                                        Quality, Excellence, Innovation, Collaboration, Customer-centricity

                                    </Typography>

                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <Grid item xs={12} md={12}>
                            <Image  className={classes.img} src={aboutImg}/>

                        </Grid>
                    </Grid>
                </Grid>



            </Container>
        </React.Fragment>
    );
}
