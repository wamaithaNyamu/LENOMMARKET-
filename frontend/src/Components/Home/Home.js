import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import Container from '@material-ui/core/Container';
const HomePageNav = () => {
    return (
        <Fragment>

            <Container maxWidth="sm">
                 <h1>Hey</h1>
            <Button>

            </Button>
                <Link to="/register">Register</Link>
            </Container>
        </Fragment>
    );
};
export default HomePageNav;
