import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/Landing.jsx";
import StandingTimer from "views/StandingTimer.jsx";
import Login from "views/Login.jsx";
import GymTracker from "views/GymTracker.jsx";
import HydrationTimer from "views/HydrationTimer.jsx";
import PomTimer from "views/PomTimer";
import WaterBottle from "components/Tools/WaterBottle.jsx";

//ADD PAGES BY FOLLOWING UP SYNTAX
//import <pageName> from "views/<fileName>.jsx"

//Template for new page routing
//<Route path="/DesiredURL" exact render={props => <Landing {...props} />} />
//<Route
//      path="/<pageName> from the import you did above"
//      exact
//render={props => <Landing {...props} />}  //LEAVE THIS THE SAME
//  />


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Landing {...props} />} />
            <Route
                path="/landing-page"
                exact
                render={props => <Landing {...props} />}
            />
            <Route path="/register" exact render={props => <WaterBottle {...props} />} />
            <Route
                path="/register"
                exact
                render={props => <WaterBottle {...props} />}
            />
            <Route path="/WaterBottle" exact render={props => <WaterBottle {...props} />} />
            <Route
                path="/WaterBottle"
                exact
                render={props => <WaterBottle {...props} />}
            />
            <Route path="/Pomodoro" exact render={props => <PomTimer {...props} />} />
            <Route
                path="/Pomodoro"
                exact
                render={props => <PomTimer {...props} />}
            />
            <Route path="/Hydration" exact render={props => <HydrationTimer {...props} />} />
            <Route
                path="/Hydration"
                exact
                render={props => <HydrationTimer {...props} />}
            />

            <Route path="/StandingTimer" exact render={props => <StandingTimer {...props} />} />
            <Route
                path="/StandingTimer"
                exact
                render={props => <StandingTimer {...props} />}
            />
            <Route path="/GymTracker" exact render={props => <GymTracker {...props} />} />
            <Route
                path="/GymTracker"
                exact
                render={props => <GymTracker {...props} />}
            />
            <Route path="/login" exact render={props => <Login {...props} />} />
            <Route
                path="/login"
                exact
                render={props => <Login {...props} />}
            />

            <Route path="/timer" exact render={props => <Landing {...props} />} />

            <Redirect to="/" />
            <Route path="/Index" exact render={props => <Index {...props} />} />
            <Route
                path="/Index"
                exact
                render={props => <Index {...props} />}
            />


        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
