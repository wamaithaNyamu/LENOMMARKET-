import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";


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

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formData;
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Passwords do not match", "danger");
        } else {
            register({ name, email, password });
        }
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
                                <h2 className="form-title">Sign Up</h2>
                                <div className="signup-content">
                                    <div className="signup-image">

                                    </div>
                                    <div className="signup-form ">
                                        <Form
                                            onSubmit={(e) => onSubmit(e)}
                                            className="register-form order-2"
                                            id="login-form"
                                        >
                                            <Col className="pr-md-1" md="12">
                                                <CardHeader>
                                                    <p> Name</p>
                                                </CardHeader>
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Name"
                                                        type="text"
                                                        name="name"
                                                        value={name}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
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
                                                        value={password}
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
                                                        name="password2"
                                                        value={password2}
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
                                                        value="Register"
                                                    >
                                                        SIGN UP
                                                    </Button>
                                                </CardFooter>
                                            </Row>
                                        </Form>
                                        <Row>
                                            <CardText>
                                                <Link to="/login" className="pr-md-1">
                                                    Already have an account? Sign In
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



Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
