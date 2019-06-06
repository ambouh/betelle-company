import React, { Component } from 'react';
import Content from './components/Content/';
import Header from './components/common/Header/';
import Footer from './components/common/Footer/';


class App extends Component {
    render(){
        return (
            <div id="container">
                <div id={"topper"}>
                    <Header/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;