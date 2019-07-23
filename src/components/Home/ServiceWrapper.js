import React, { Component } from 'react';
import Accordion from './Accordion';

class ServiceWrapper extends Component {

    render(){
        return (
            <div>
                <Accordion>
                    <div label='Web Applications'>
                        <p>
                            Building web applications as experts in
                            different technologies:
                        </p>
                        <p>
                            ASP.Net Core,
                            MVC, MVVM, HTML, Bootstrap, SPA,
                            JavaScript,  jQuery, AJAX, CSS,
                            TypeScript, IIS, E-Commerce.
                        </p>
                    </div>
                    <div label='Mobile Application'>
                        <p>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                            accumsan lacus vel facilisis.
                        </p>
                    </div>
                    <div label='.NET Framework'>
                        <p>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                            accumsan lacus vel facilisis.
                        </p>
                    </div>

                </Accordion>
            </div>
        );
    }
}

export default ServiceWrapper;