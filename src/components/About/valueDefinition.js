import React, {Component} from 'react';
import pic1 from "../../images/picture1.png";
import pic2 from "../../images/picture2.png";
import pic3 from "../../images/picture3.png";
import underline from "../../images/values-border.png";

const ValueDefinition = () => {
    return (
        <div className={"aboutValueDfn row"}>
              <div className={"image-collage"}>
                    <div className={"row"}>
                        <div className={"col1"}>
                            <div className={"div1"}>
                                <img className={"pic1"} src={pic1}/>
                            </div>
                            <div className={"div3"}>
                                <img className={"pic3"} src={pic3}/>
                            </div>
                        </div>
                        <div className={"col2"}>
                            <div className={"div2"}>
                                <img className={"pic2"} src={pic2}/>
                            </div>

                            <h1 className={"ourValues_lg"}>Our Values
                                <img src={underline} alt={"Our Values"}/>
                            </h1>
                        </div>
                    </div>
                </div>
              <div className={"value-section"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
            </div>
        </div>
    );
};

export default ValueDefinition;
