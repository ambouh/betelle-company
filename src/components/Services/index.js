import React, {Component} from 'react';
import styles from './Services.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';
import ServicesWrapper from './servicesWrapper';
const cx = classNames.bind(styles);

class Services extends Component {

    render(){
        return (
            <div>
                <Default title={"Services"}/>
                <ServicesWrapper/>
            </div>
        );
    }
}

export default Services;

