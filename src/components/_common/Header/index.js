import React, { Component } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import $ from 'jquery';
import {Link} from 'react-router-dom';


const cx = classNames.bind(styles);

class Header extends Component {

    constructor(props) {
        super(props)

        this.menu = React.createRef();
        this.menuBtn = React.createRef();
    }
/*    toggleMenu = () => {
        $('body').toggleClass();
    };*/

    handleOpen = () => {
        const menu = this.menu.current;
        const isOpen = menu.classList.contains('open');
        menu.classList.toggle('open', !isOpen)

    };
    render(){

        let background = (this.props.isHome)? "transparentBg" : "colorBg";

        return (
            <header className={cx('header') + " " + background} >
                <div className="wrapper">
                    <a className="header-logo" href={"/"}>
                        <svg id="Logo_SVG_Trial_copy" data-name="Logo SVG Trial copy" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" width="223" height="65">
                            <image id="b" width="61" height="65"
                                   xlinkHref="data:img/png;base64,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"/>
                            <path id="etelle" className="cls-1" fill="#fff" fillRule="evenodd"
                                  d="M87.53 50.68a13.5 13.5 0 0 1-4.25 2.43 14.76 14.76 0 0 1-5.13.92 12.26 12.26 0 0 1-9.18-3.85 14.06 14.06 0 0 1-3.85-9.86H96.2a18.7 18.7 0 0 0-3.82-11.81 17.04 17.04 0 0 0-14.1-6.7 16.5 16.5 0 0 0-13.69 6.54 18.46 18.46 0 0 0-4.03 11.7 18.68 18.68 0 0 0 4.76 12.53q4.77 5.54 13.22 5.54a18.95 18.95 0 0 0 6.83-1.16 16.9 16.9 0 0 0 5.43-3.38 20.42 20.42 0 0 0 4.26-5.84l-3.75-1.97a20.71 20.71 0 0 1-3.78 4.9zm-21.96-14.2a14.77 14.77 0 0 1 4.03-7.14 12.66 12.66 0 0 1 8.74-3.27 13.78 13.78 0 0 1 5.88 1.3 12.27 12.27 0 0 1 4.5 3.42 14.74 14.74 0 0 1 2.59 5.69H65.57zM107.9 22.7h-5.9l-.55 3.87h5.93l-4.15 30.66h4.44l4.09-30.66h6.96l.5-3.87h-6.95l1.73-12.92h-4.35zm41.29 27.98a13.5 13.5 0 0 1-4.24 2.43 14.76 14.76 0 0 1-5.13.92 12.27 12.27 0 0 1-9.19-3.85 14.06 14.06 0 0 1-3.84-9.86h31.07a18.7 18.7 0 0 0-3.81-11.81 17.03 17.03 0 0 0-14.1-6.7 16.5 16.5 0 0 0-13.7 6.54 18.46 18.46 0 0 0-4.03 11.7A18.69 18.69 0 0 0 127 52.59q4.76 5.54 13.21 5.54a18.96 18.96 0 0 0 6.83-1.16 16.9 16.9 0 0 0 5.43-3.38 20.43 20.43 0 0 0 4.26-5.84L153 45.77a20.73 20.73 0 0 1-3.79 4.9zm-21.96-14.2a14.76 14.76 0 0 1 4.04-7.14 12.66 12.66 0 0 1 8.74-3.27 13.78 13.78 0 0 1 5.87 1.3 12.27 12.27 0 0 1 4.5 3.42 14.75 14.75 0 0 1 2.6 5.69h-25.75zm33.1 20.75h4.36l6.44-47.86h-4.32zm11.71 0h4.36l6.44-47.86h-4.32zm41.51-6.55a13.5 13.5 0 0 1-4.24 2.43 14.76 14.76 0 0 1-5.13.92 12.27 12.27 0 0 1-9.18-3.85 14.06 14.06 0 0 1-3.85-9.86h31.07a18.7 18.7 0 0 0-3.8-11.81 17.03 17.03 0 0 0-14.1-6.7 16.5 16.5 0 0 0-13.7 6.54 18.46 18.46 0 0 0-4.03 11.7 18.69 18.69 0 0 0 4.76 12.53q4.77 5.54 13.22 5.54a18.96 18.96 0 0 0 6.83-1.16 16.9 16.9 0 0 0 5.43-3.38 20.43 20.43 0 0 0 4.26-5.84l-3.75-1.97a20.73 20.73 0 0 1-3.78 4.9zm-21.95-14.2a14.76 14.76 0 0 1 4.03-7.14 12.66 12.66 0 0 1 8.74-3.27 13.77 13.77 0 0 1 5.88 1.3 12.27 12.27 0 0 1 4.5 3.42 14.75 14.75 0 0 1 2.59 5.69h-25.74z"/>
                            <path id="dot" className="cls-1" fill="#fff" fillRule="evenodd"
                                  d="M202.5 13.37a2.8 2.8 0 0 0 0 3.94 2.74 2.74 0 0 0 3.92 0 2.8 2.8 0 0 0 0-3.94 2.77 2.77 0 0 0-3.91 0z"/>
                        </svg>
                    </a>
                    <div className={"menu-wrapper"} ref={this.menu}>
                        <button className="menu-toggle" onClick={this.handleOpen}></button>
                        <nav >
                            <ul className="menu" onClick={this.handleOpen}>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>Who We Are</Link></li>
                                <li><Link to={"/services"}>Services</Link></li>
                                <li><Link to={"/contact"}>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
