import React, { Component } from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
//import the icons
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cx = classNames.bind(styles);

class Footer extends Component {
    render(){
        return (
            <div className={cx('footer')}>
                <div className="footer-top">
                    <div className="wrapper">
                        <div className="footer-content">
                            <h1>Software built upon strong <br/>
                                foundations of experience
                            </h1>
                            <p>We value great work. Here, excellence is guaranteed.
                            </p>
                            <div className="social-wrapper">
                                <h1>Follow us</h1>
                                <ul className="social">
                                    <li><a href="#"><FontAwesomeIcon icon={ faFacebookF } size="1x"/></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faTwitter } size="1x"/></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faInstagram } size="1x"/></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faLinkedinIn } size="1x"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h1>Contact us</h1>
                            <ul className="contact">
                                <li>
                                    OFFICE<br/>
                                    <span>Mosaic At Metro, Suite 1317<br/>
                                    Hyattsville, Maryland 20782</span>
                                </li>
                                <li>
                                    EMAIL<br/>
                                    <span>info@betelle.net</span>

                                </li>
                                <li>
                                    PHONE<br/>
                                    <span>+1 301 439 5589</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="wrapper">
                        <ul className="copyright">
                            <li className="copyright-company">BETELLE CUSTOM SOFTWARE COMPANY</li>
                            <li className="copyright-text">2019 COPYRIGHT | ALL RIGHTS RESERVED</li>
                        </ul>
                        <ul className="privacy">
                            <li>
                                <a className="privacy-text" href="">PRIVACY</a>
                            </li>
                            <li>
                                <a className="privacy-terms" href="">TERMS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
