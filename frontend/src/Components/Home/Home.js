import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "./navbar"
import AnnouncementBar from "./Announcement"
import Categories from "./Categories"
import Topselling from "./Topselling"
import Featured from './Featured'
import WhyUS from './whyUS'


export default function Home() {


    return (
        <React.Fragment>

        <AnnouncementBar/>
        <Container >

            <Navbar/>
            <WhyUS/>
            <Categories/>
            <Topselling/>
            <Featured/>


        </Container>
        </React.Fragment>
    );
}
