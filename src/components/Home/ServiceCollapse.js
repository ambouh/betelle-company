import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ServiceCollapse extends Component {

    render(){
        return (
            <div className={"collapseWrapper"}>
                <div className={"card"}>
                    <div className={"title"} id={"title"}>WEB APPLICATIONS</div>
                    <div className={"body"} >
                        Building web applications as experts in
                        different technologies. ASP.Net Core,
                        MVC, MVVM, HTML, Bootstrap, SPA,
                        JavaScript,  jQuery, AJAX, CSS,
                        TypeScript, IIS, E-Commerce.
                        <Link to="/services"> Read More => </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceCollapse;