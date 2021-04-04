import React from 'react';
import { Route, Switch } from 'react-router';
import Contact from "../views/ContactPage/Contact";

export default function Routes() {

    return (
        <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/home" />
            <Route exact path="/home" />
        </Switch>
    )
}