import React, { Component } from 'react';
import JumbotronContent from "./JumbotronContent";

class Jumbotron extends Component {
    render(){
        return (
            <div className={"jumbotron"}>
                    <JumbotronContent/>
            </div>
        );
    }
}

export default Jumbotron;