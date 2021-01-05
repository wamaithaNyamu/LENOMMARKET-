import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "./navbar"
import AnnouncementBar from "./Announcement"
import Categories from "./Categories"



export default function Cart() {


    return (
        <React.Fragment>

            <AnnouncementBar/>
            <Container >

                <Navbar/>




            </Container>
        </React.Fragment>
    );
}
