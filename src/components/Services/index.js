import React, {Component} from 'react';
import styles from './Services.scss';
import classNames from 'classnames/bind';
import Slideshow from './Slideshow';
import ServicesContainer from './ServicesContainer';

const cx = classNames.bind(styles);

class Services extends Component {

    render(){
        return (
            <div className={cx('')}>
                {/*
                    <Slideshow/>
                    <ServicesContainer/>
                */}

                Services Section
            </div>
        );
    }
}

export default Services;

