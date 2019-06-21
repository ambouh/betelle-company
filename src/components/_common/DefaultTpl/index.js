import React, {Component} from 'react';

const Default = (props) => {
    let h1 = {
        color: '#2b8ec8'
    };

    let paragraph = {
        fontStyle: 'italic'
    };

    let wrapper = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '12.500rem'
    };

    let span = {
        color: '#2b8ec8',
        fontWeight: '400'
    };

    return (
        <div style={wrapper}>
            <h1 style={h1}>{props.title}</h1>
            <p style={paragraph}>This component is under construction: <span style={span}>{props.title}</span> section</p>
        </div>
    );
};

export default Default;