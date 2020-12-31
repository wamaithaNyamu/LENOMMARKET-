import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import {
    CardHeader,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
} from "reactstrap";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };
    //redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <Row className="login">
                <div className="card card-user">
                    <div className="card-body">
                        <p className="card-text">
                            <div className="author">
                                <div className="block block-one"></div>
                                <div className="block block-two"></div>
                                <div className="block block-three"></div>
                                <div className="block block-four"></div>
                            </div>
                        </p>
                        <div className="card-description">
                            <div className="container">
                                <h2 className="form-title">Sign In</h2>
                                <div className="signup-content">
                                    <div className="signup-form  ">
                                        <Form
                                            onSubmit={(e) => onSubmit(e)}
                                            className="register-form "
                                            id="login-form"
                                        >
                                            <Col className="pr-md-1" md="12">
                                                <CardHeader>
                                                    <p> Email</p>
                                                </CardHeader>
                                                <FormGroup>
                                                    <Input
                                                        placeholder="email@gmail.com"
                                                        type="text"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="12">
                                                <CardHeader>
                                                    <p> Password</p>
                                                </CardHeader>
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Password"
                                                        type="password"
                                                        name="password"
                                                        minLength="6"
                                                        value={password}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Row>
                                                <CardFooter>
                                                    <Button
                                                        className="btn-fill"
                                                        color="primary"
                                                        type="submit"
                                                        name="signin"
                                                        className="form-submit"
                                                        value="Login"
                                                    >
                                                        SIGN IN
                                                    </Button>
                                                </CardFooter>
                                            </Row>
                                        </Form>
                                        <Row>
                                            <CardText>
                                                <Link to="/Register" className="pr-md-1">
                                                    Don't have an account? Sign Up
                                                </Link>
                                            </CardText>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Fragment>
    );
};
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
