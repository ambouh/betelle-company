import React, { Component } from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';

const cx = classNames.bind(styles);

class About extends Component {

    render(){
        return (
                <Default title={"Who We Are"}/>
        );
    }
}

export default About;