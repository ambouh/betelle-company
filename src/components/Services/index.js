import React, {Component} from 'react';
import styles from './Services.scss';
import classNames from 'classnames/bind';
import Slideshow from './Slideshow';
import ServicesContainer from './ServicesContainer';
import Default from '../_common/DefaultTpl';
const cx = classNames.bind(styles);

class Services extends Component {

    render(){
        return (
            <Default title={"Services"}/>
        );
    }
}

export default Services;

