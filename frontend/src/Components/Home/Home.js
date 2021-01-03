import React from 'react';
import { Link, Redirect } from "react-router-dom";

import { fade, makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";

import FabCart from "./fabIcon"
import Navbar from "./navbar"
import AnnouncementBar from "./Announcement"
import Carousel from "./carousel"
import Categories from "./Categories"
import Topselling from "./Topselling"
const useStyles = makeStyles((theme) => ({

    home: {

        margin: theme.spacing(3),
        padding: theme.spacing(0, 0, 0, 0),

    },

}));

export default function SearchAppBar() {
    const classes = useStyles();


    return (
        <React.Fragment>

            <AnnouncementBar/>
        <Container >
            <Navbar/>
            <Carousel/>
            <Categories/>
            <Topselling/>
            <FabCart/>

        </Container>
        </React.Fragment>
    );
}
