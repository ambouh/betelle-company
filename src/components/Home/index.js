import React, { Component } from 'react';
import styles from './Home.scss';
import Jumbotron from './Jumbotron';
import Mission from './Mission';
import Services from './Services';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Home extends Component {
    render(){
        return (
            <div className={cx('Home')} >
                <Jumbotron/>
                <Mission/>
                <Services/>
            </div>
        );
    }
}

export default Home;