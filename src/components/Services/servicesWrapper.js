import React, {Component} from 'react';
import Tabs from './Tabs';
import Web from "./_services/web";
import CarouselPage from "./CarouselPage";

class ServicesWrapper extends Component {

    render() {

        return (
            <section className={"servicesContainer"}>
                <div className={"wrapper"}>
                    <div className={"content"}>
                        <CarouselPage/>
                        {/*
                                              <Tabs>
                            <div label={"Web Development"}>
                                <Web title={"web development"}/>
                            </div>
                            <div label={"Mobile Development"}>
                                <Web title={"mobile development"}/>
                            </div>
                            <div label={"Cloud Database"}>
                                <Web title={"cloud database"}/>
                            </div>
                            <div label={"Security"}>
                                <Web title={"security"}/>
                            </div>
                        </Tabs>
                        */}
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesWrapper;