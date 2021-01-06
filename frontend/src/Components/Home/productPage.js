import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from "./carousel";
import Navbar from "./navbar";
import Image from 'material-ui-image'
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    gen: {

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

    },

}));

export default function Cart() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Navbar/>
            <Container >

                <Grid container spacing={2}>
                    <Hidden mdDown>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6">
                                Categories
                            </Typography>
                            <div >
                                <List>
                                    <List component="nav" aria-label="secondary mailbox folders">
                                        <ListItem button>
                                            <ListItemText primary="Blades" />
                                        </ListItem>
                                        <ListItem >
                                            <ListItemText primary="Conduits" />
                                        </ListItem>

                                        <ListItem button>
                                            <ListItemText primary="Fittings" />
                                        </ListItem>
                                        <ListItem >
                                            <ListItemText primary="Glues" />
                                        </ListItem>

                                        <ListItem button>
                                            <ListItemText primary="Grattings" />
                                        </ListItem>
                                        <ListItem >
                                            <ListItemText primary="Pipes" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Sinks" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Tanks" />
                                        </ListItem>
                                        <ListItem >
                                            <ListItemText primary="Toilets" />
                                        </ListItem>
                                    </List>
                                </List>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={9}>

                        <div >

                            <Grid container  className={classes.gen} >

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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
                                                    </Grid>

                                                </Grid>

                                            </div>
                                        </div>

                                    </div>
                                </Grid>
                            </Grid>

                        </div>

                        <div >

                            <Grid container  className={classes.gen} >

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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
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
                                                    <Grid item  sm={12}>
                                                        <Button variant="contained" color="secondary"
                                                                startIcon={<ShoppingCartSharpIcon/>}>
                                                            Add to Cart
                                                        </Button>
                                                    </Grid>

                                                </Grid>

                                            </div>
                                        </div>

                                    </div>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                </Grid>



            </Container>
        </React.Fragment>
    );
}
