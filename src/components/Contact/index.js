import React, { Component } from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';
import ContactForm from './ContactForm';
const cx = classNames.bind(styles);

class Contact extends Component {

    render(){
        return (
            <div>
                <Default title={"Contact"}/>
                <ContactForm/>
            </div>
        );
    }
}

export default Contact;