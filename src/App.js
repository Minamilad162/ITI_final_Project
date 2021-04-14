import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Login from './components/User/Login/Login';
import Payment from './components/User/Payment/Payment';
import Register from './components/User/Register/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RegisterAdmin from './components/Admin/Register/Register';
import Loader from './components/Shared/Loader/Loader';
import Nav from './components/Shared/Nav/Nav';
import Home from './components/User/Home/Home';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/AdminNavbar/AdminNavbar';
import LandingPage from './components/Landing-Page/LandingPage';
import Movies from './components/User/MoviesList/Movies';
import VideoApp from './components/User/VideoPlayer/Video';


function App() {
    const [loaded, setLoaded] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        // this is calling to api
        localStorage.getItem('token') ? setLogged(true) : setLogged(false);
        setTimeout(function () {
            setLoaded(true);
        }, 1000);
    }, []);

    if (!loaded) return <Loader />;
    else if (!logged)
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/login">
                        <Login header={'Log In..'} endpoint={'logme'} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    {/* <Route path="/admin/login">
                        <Login header={'Admin Login'} endpoint={'admin/login'} />
                    </Route> */}
                    <Redirect to="/login" />
                </Switch>
                
                <a className="position-fixed bottom-0 end-0 btn btn-light" href="#nav">Top</a>
            </Router>
        );
    else
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/landing-page">
                        <LandingPage />
                    </Route>
                    <Route path="/Login">
                        <Login header={'Please Sign In..'} endpoint={'/logme'} />
                    </Route>
                    {/* <Route path="/dashboard">
                        <Dashboard />
                    </Route> */}

                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/series"></Route>
                    <Route path="/contact-us"></Route>
                </Switch>
                <a className="position-fixed bottom-0 end-0 btn btn-light" href="#nav">Top</a>
            </Router>
        );
}
export default App;
