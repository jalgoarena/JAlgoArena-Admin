import React from "react";

import MenuPanel from "./components/Menu";
import Footer from "./components/Footer";
import ErrorMessageBox from "./components/ErrorMessage";
import WorkInProgress from "./components/WorkInProgress";
import {ProblemsAdminPage} from "../problems";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/home";

export class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div>
            <MenuPanel/>
            <ErrorMessageBox/>
            <WorkInProgress/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/problemsAdmin" component={ProblemsAdminPage}/>
            </Switch>
            <Footer/>
        </div>;
    }
}
