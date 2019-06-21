import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import background from "../../images/jumboBG.png";
//import {Link, withRouter} from 'react-router-dom';

class JumbotronContent extends Component {
    jumbotronStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "contain",
        paddingTop: "150px"
    }

    render() {
        return (
            <div className={"wrapper"} style={this.jumbotronStyle}>
            <div className={"jumbotronContent"} >

                    <div className={"text1"}>
                        <h1 className={"text1"}>
                            <mark> <span className={"emphasis-text1"}>Software</span> built on</mark>
                        </h1>
                        <h1 className={"text1"}>
                            <mark>strong experience.</mark>
                        </h1>

                        <a href={"/"} className={"contact-btn"}>Contact Us <FontAwesomeIcon icon={faAngleRight} size="1x"/></a>
                    </div>

                    <div className={"text2"}>
                        <p>
                            Deal directly with <span>experts,</span><br/>
                            who are <span>knowledgeable,</span><br/>
                            are <span>seasoned,</span><br/>
                            communicate <span>effectively,</span><br/>
                            prioritize <span>quality,</span><br/>
                            and a <span>timely delivery.</span><br/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default JumbotronContent;