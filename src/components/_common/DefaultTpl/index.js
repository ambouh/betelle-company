import React, {Component} from 'react';
import './DefaultTpl.scss';

const Default = (props) => {
    let h1 = {
        color: '#6d8094',
        fontSize: '250px',
        lineHeight: '190px',
        marginBottom: '4rem'
    };

    let borderStyle = 'linear-gradient(to right, #fff 80px, rgba(0,0,0,0) 5%)';
    let paragraph = {
        color: '#fff',
        fontSize: '30px',
        margin: '0 0 0 10rem',
        padding: '2rem 3rem 0',
        lineHeight: '40px',
        border: '1px solid #fff',
        borderRadius: '20px 0 0 0',
        borderRight: 'none',
        borderBottom: 'none',
        borderImage: borderStyle,
        borderImageSlice: '1 1 1 1'
    };
    //background: '#2c4c68';
    let wrapper = {
        display: 'flex',
        flexDirection: 'column',
        background: '#192d40',
        paddingBottom: '5.625rem'
    };

    let span = {
        color: '#2b8ec8',
        fontWeight: '400'
    };

    let construction = {
        fontStyle: 'italic',
        color: '#fff',
        marginTop: '30px',
        fontSize: '20px',
        textAlign: 'center'
    };

    return (
        {/*
    <div style={wrapper}>

        <div className={"wrapper"}>
            <h1 style={h1}>{props.title}</h1>
            <p style={paragraph}>At Betelle, helping businesses is fulfilling work. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p style={construction}>{props.title} component is under construction</p>
        </div>
    </div> */        },

        <div className={"defaultTpl"}>
            <div className={"wrapper"}>
            <h1 className={""}>{props.title}</h1>
               <p>
                   At Betelle, helping businesses is fulfilling work. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <section style={construction}>{props.title} component is under construction</section>
            </div>
        </div>

    );
};

export default Default;
