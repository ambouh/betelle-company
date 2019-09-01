import React, { Component } from 'react';

const Card = (props) => {
    return (

        <ul>
            <li className={"title"}>
                <span >
                {props.content.title}
                </span>
            </li>
            <li>
                {props.content.desc}
            </li>
        </ul>
    )
};

export default Card;