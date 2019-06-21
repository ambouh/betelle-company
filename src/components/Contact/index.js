import React, { Component } from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';
const cx = classNames.bind(styles);

class Contact extends Component {

    render(){
        return (
            <Default title={"Contact Us"}/>
        );
    }
}

export default Contact;