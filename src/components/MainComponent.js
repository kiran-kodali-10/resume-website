import { React, Fragment } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from "./Content";

function Main() {

    return (
        <Fragment>
            <Header />
            <Content />
            <Footer />
        </Fragment>

    )
}

export default Main;