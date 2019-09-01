import React, {Component} from 'react';
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
const ValueDefinition = () => {
    const temp1Style = {
        'background': '#999',
        'width' : '233px',
        'height' : '237px',
        'position':'relative',
        'top':'80px'
    };

    const temp2Style = {
        'background': '#666',
        'width' : '219px',
        'height' : '283px',
        'position':'relative',
        'top':'-115px',
        'left': '13px'
    };

    const temp3Style = {
        'background': '#afafaf',
        'width' : '365px',
        'height' : '439px',
        'boxShadow':'2px 2px 4px -1px rgba(0, 0, 0, 0.39)'
    };


    return (
        <div className={"aboutValueDfn columns-span-2"}>
            <div className={"equal"}>
                <div className={"img-collage"}>
                    <img style={temp1Style} src={pic2}/>
                    <img style={temp3Style} src={pic3}/>
                    <img style={temp2Style} src={pic1}/>
                    <h1>Our Values</h1>
                </div>

            </div>
            <div className={"equal"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
            </div>
        </div>
    );
};

export default ValueDefinition;