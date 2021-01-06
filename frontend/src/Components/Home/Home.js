import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "./navbar"
import AnnouncementBar from "./Announcement"
import Categories from "./Categories"
import Topselling from "./Topselling"
import Featured from './Featured'
import WhyUS from './whyUS'
import Tabs from "./tabs"
import Fab from "./fabIcon"
export default function Home() {


    return (
        <React.Fragment>

        <AnnouncementBar/>
            <Navbar/>
            <Tabs/>
            <Fab/>

        </React.Fragment>
    );
}
