import React, {Component} from 'react';
import data from './data.js';
import Card from "./card";
const valueCategory = () => {
    const categories = data.map((category, i) => <Card key={i} content={category}/>
    );
    return (
        <div className={"aboutValueCtg"}>
            {categories}
        </div>
    );
};

export default valueCategory;