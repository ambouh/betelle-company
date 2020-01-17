import React, { Component } from 'react';
import Accordion from './Accordion';

class ServiceWrapper extends Component {

    render(){
        return (
            <div>
                <Accordion>
                    <div label="Software Development">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div label="Database">
                        <p>
                            Our database experts can provide guidance on everything from database design and implementation to optimization.
                        </p>
                    </div>
                    <div label="Sharepoint">
                        <p>
                            Collaboration and process automation made easy. Let us help with:
                            <ul>
                                <li>Team collaboration</li>
                                <li>Office 365</li>
                                <li>Record management</li>
                                <li>Content management</li>
                            </ul>
                        </p>
                    </div>
                    <div label="UI/UX & Branding">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </Accordion>
            </div>
        );
    }
}

export default ServiceWrapper;