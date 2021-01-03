import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import AlertUI from '@material-ui/lab/Alert';


const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
        <Container component="main" maxWidth="sm">

        <div key={alert.id} >
            <AlertUI variant="filled" severity={alert.alertType}>

            {alert.msg}
            </AlertUI>
        </div>
        </Container>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);


