import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../Home/spinner";
import CreateProfile from "../User/Profile";
import CustomerDashboard from "./SignedIN/CustomerDashboard"

const Dashboard = ({
                       getCurrentProfile,
                       auth: { user },
                       profile: { profile, loading },
                   }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            {profile !== null ? (
                <Fragment>
                 <CustomerDashboard/>
                </Fragment>
            ) : (
                <Fragment>
                    {user.role ==='customer' ? (<CreateProfile/>) : (<Fragment> <CustomerDashboard/></Fragment>)}


                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
