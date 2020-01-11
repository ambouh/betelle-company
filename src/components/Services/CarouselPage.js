import React,{Component} from 'react';
import styled from 'styled-components';

import Carousel from './_carousel/Carousel';
import Item from './_carousel/Item'
import Web from './_services/web'

class CarouselPage extends Component {
    render(){
       return (
           <div>
               <Carousel
                title={"Carousel"}
               >
                   <Item label={"Web Application"}>
                       <Web title={"web development"}/>
                   </Item>
                   <Item label={"Mobile Application"}>
                       <Web title={"Mobile Application"}/>
                   </Item>
                   <Item label={".NET Framework"}>
                       <Web title={".NET Framework"}/>
                   </Item>
                   <Item label={"Relational Database"}>

                       <Web title={"Relational Database"}/>
                   </Item>
                   <Item label={"SharePoint"}>
                       <Web title={"SharePoint"}/>
                   </Item>
                   <Item label={"Online Branding"}>
                       <Web title={"Online Branding"}/>
                   </Item>
               </Carousel>
           </div>
       )
    }
}

export default CarouselPage;