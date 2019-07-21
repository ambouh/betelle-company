import React, { Component } from 'react';
import Content from './components/Content/';

import Footer from './components/_common/Footer/';


class App extends Component {
    render(){
        return (
            <div id="container">
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;