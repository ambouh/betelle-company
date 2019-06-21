import React, {Component} from 'react';
import Service from './Service';

const ServiceContainer = () => {
    return (
        <section id="services" className="row">
            <h2 className="">Our Services</h2>
            <article className="">
                <Service/>
                <Service/>
                <Service/>
            </article>
        </section>
    );
};

export default ServiceContainer;