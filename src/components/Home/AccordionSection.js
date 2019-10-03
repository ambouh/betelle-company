import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        sectionStyle: PropTypes.string.isRequired
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };


    iconStyle = {
        fontSize: '35px',
        fontWeight: 100,
        float: 'right',
        color: '#2b8ec8',
        lineHeight: '1'
    };

    accordionText = {
        marginTop: '40px',
        padding: '15px 0px',
        fontSize: '25px',
        borderTop: '1px solid #2b8ec8'
    };
    render(){

        const {
            onClick,
            props: { isOpen, label },
        } = this;


        return (
            <div
                className={this.props.sectionStyle}
            >
                <div onClick={onClick} className={'labelStyle'}>
                    {label}
                    <div style={this.iconStyle}>
                        {!isOpen && <span>+</span>}
                        {isOpen && <span>-</span>}
                    </div>
                </div>
                {isOpen && (
                    <div
                        style={this.accordionText}
                    >
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}

export default AccordionSection;