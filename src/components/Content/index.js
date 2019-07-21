import React, { Component} from 'react';
import Home from '../Home/';
import Services from "../Services";
import About from'../About';
import Contact from "../Contact";
import page404 from "../page404";
import {Route, Switch, withRouter} from "react-router-dom";
import Header from "../_common/Header";

class Content extends Component {

    /*state = ({
       isHome: true,
        marginTop: '0px'
    });*/

    constructor(props) {
        super(props);

        this.state =  ({
            isHome: [],
            marginTop: []
        });


        this.props.history.listen((location, action) => {
            this.setHeader(location)
        });
    }

    setHeader = (location) => {
        let setHome = (location.pathname === '/'),
            mTop = (setHome)? '0px' : '8.75rem';

        this.setState({isHome: setHome, marginTop: mTop});

        return mTop;
    };

    componentWillMount() {
        let location = this.props.location;
        this.setHeader(location);
    }

    render(){
        return (
            <div id={"topper"}>
                <Header isHome={this.state.isHome} />
                <div id={"content"} style={{marginTop: this.state.marginTop}}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/about"} component={About} />
                        <Route exact path={"/services"} component={Services}/>
                        <Route exact path={"/contact"} component={Contact}/>
                        <Route path="*" component={page404}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default withRouter(Content);