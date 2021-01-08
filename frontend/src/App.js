import { HashRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Dashboard from "./Components/Home/Dashboard"
import Cart from "./Components/Home/cart"
import Catalog from "./Components/Home/Catalog"
import Announcement from "./Components/Home/Announcement"
const theme = createMuiTheme({


    palette: {
        primary: {
            main: '#ffdd00',
        },
        secondary: {
            main: '#ff0025',
        },
        white: {
            main: '#ffffff',
        },
    },
});


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <Fragment>
                    <CssBaseline />
                    <Announcement/>

                    <section className="container">
                        <Alert />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/catalog" component={Catalog} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />

                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
      </ThemeProvider>
    );
};

export default App;
