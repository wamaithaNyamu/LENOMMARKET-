import { HashRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Home/Home";
import Alert from "./Components/Home/Alert";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./Components/routing/PrivateRoute";
import React, { Fragment, useEffect } from "react";
//redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <HashRouter>
                <Fragment>
                    <CssBaseline />
                    <Navbar />
                    <section className="container">
                        <Alert />
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />

                        </Switch>
                    </section>
                </Fragment>
            </HashRouter>
        </Provider>
    );
};

export default App;
