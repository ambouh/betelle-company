import React, { Component} from 'react';
import Home from '../Home/';
import Services from "../Services";
import About from'../About';
import Contact from "../Contact";
import page404 from "../page404";
import {Route, Switch} from "react-router-dom";

class Content extends Component {

    render(){
        return (
            <div id={"content"}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/services"} component={Services}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    <Route path="*" component={page404}/>
                </Switch>
            </div>
        );
    }
}

export default Content;