import React from 'react';

const Web = (props) => {
    return (
        <div className={"text columns-span-2"}>
            <div className={"equal"}>
                <h2 className={"h2"}>
                    About {" " + props.title}
                </h2>
            </div>
            <div className={"equal right text"}>
                <h4 className={"h4"}>{props.title}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse accumsan lacus vel facilisis.
                </p>
            </div>
        </div>
    );
};

export default Web;