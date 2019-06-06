import React, { Component } from 'react';
import missionPic from "../../images/mission.png";
class Mission extends Component {
    render(){
        return (
            <div className={"mission"}  >
                <div className={"wrapper"} >
                    <div className={"left"}>
                        <h1>
                            Our <br/>
                            Mis<span>sion is simple</span>
                        </h1>
                        <p>
                            We are a team of <span className={"emphasis"}>software engineers</span> with <span className={"emphasis"}>years of experience</span> and
                            <span className={"emphasis"}> strong foundation</span> in software technologies. We are <span className={"emphasis"}>passionate</span> about
                            creating <span className={"emphasis"}>great software applications</span> and <span className={"emphasis"}>solving</span> technological
                            <span className={"emphasis"}> problems</span> for businesses. <span className={"emphasis"}>We value great work.</span>
                        </p>
                        <p>
                            When clients meet with us, they are dealing directly with experts
                            who understand their business  needs, carefully assess them and
                            constitute the best possible solution based on proven knowledge
                            and accumulated experience. We effectively communicate
                            all aspects our projects. we build ideas from conception to
                            deliver well-tested, fully functional, quality software.
                        </p>
                    </div>
                    <div className={"right"}>
                        <p className={""}>We <span className={"emphasis"}>value</span> great work. </p>
                        <img src={missionPic} alt={"Person working on desk computer"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Mission;