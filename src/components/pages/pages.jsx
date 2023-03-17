import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Router>    
                <Header />
                <Switch>
                    <Route exact path= "/" component ={Home} />
                {/* <Route path="/about">
                    <About />
                </Route> */}
                </Switch>
            </Router>
        </>
    )
}

export default Pages