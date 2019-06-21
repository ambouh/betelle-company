import React, { Component } from 'react';
//import styles from './page404.scss';
import classNames from 'classnames/bind';
import Default from '../_common/DefaultTpl';
//const cx = classNames.bind(styles);

class page404 extends Component {

    render(){
        return (
            <Default title={"PAGE 404: NOT FOUND"}/>
        );
    }
}

export default page404;