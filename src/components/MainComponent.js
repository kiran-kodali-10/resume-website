import { React, Fragment } from "react";
import Header from './Header';
import Footer from './Footer';
import Content from "./Content";

function Main() {

    return (
        <Fragment>
            <Header />
            <div className="container-fluid">
                <Content />
            </div>
            <Footer />
        </Fragment>

    )
}

export default Main;