import React, { Component } from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';
import MissionSection from './missionSection';
import ValueDefinition from './valueDefinition';
import ValueCategory from './valueCategory';

const cx = classNames.bind(styles);

class About extends Component {

    render(){
        return (
            <div className={"about"}>
                <Default title={"Company"}/>
                <MissionSection/>
                <div className={"wrapper"}>
                    <ValueDefinition/>
                    <div className={"separator"}></div>
                    <ValueCategory/>
                </div>
            </div>
        );
    }
}

export default About;