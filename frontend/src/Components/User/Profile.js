import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({

        county: "",
        areaDescription: "",
        businessName: "",
        howYouHeardUs: "",

    });

    const {

        county,
        areaDescription,
        businessName,
        howYouHeardUs,

    } = formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };
    return (
        <Fragment
            className="content"
            style={{
                height: "90vh",
            }}
        >
            <Row>
                <h2>Create your profile to proceed</h2>
            </Row>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <h5 className="title">Create Profile</h5>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={(e) => onSubmit(e)}>
                                <Row>
                                    <Col className="pr-md-1" md="12">
                                        <CardHeader>
                                            <p>County your business is located :</p>
                                        </CardHeader>
                                        <FormGroup>
                                            <Input
                                                placeholder="First Name"
                                                type="text"
                                                name="country"
                                                value={county}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="12">
                                        <CardHeader>
                                            <p>Describe the area within the county :</p>
                                        </CardHeader>
                                        <FormGroup>
                                            <Input
                                                placeholder="Binary Token"
                                                type="text"
                                                name="areaDescription"
                                                value={areaDescription}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pr-md-1" md="12">
                                        <CardHeader>
                                            <p>What is your business name ?</p>
                                        </CardHeader>
                                        <FormGroup>
                                            <Input
                                                placeholder="MT5 Login ID"
                                                type="text"
                                                name="businessName"
                                                value={businessName}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="12">
                                        <CardHeader>
                                            <p>How did you hear about us ?</p>
                                        </CardHeader>
                                        <FormGroup>
                                            <Input
                                                placeholder="MT5 Login Password"
                                                type="text"
                                                name="howYouHeardUs"
                                                value={howYouHeardUs}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </FormGroup>
                                    </Col>


                                </Row>
                                <Row>
                                    <CardFooter>
                                        <Button className="btn-fill" color="primary" type="submit">
                                            Submit
                                        </Button>
                                    </CardFooter>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
