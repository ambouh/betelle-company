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
                   <Item label={"Software Development"}>
                       <Web title={"Software Development"}/>
                   </Item>
                   <Item label={"Database"}>
                       <Web title={"Database"}/>
                   </Item>
                   <Item label={"Sharepoint"}>
                       <Web title={"Sharepoint"}/>
                   </Item>
                   <Item label={"UI/UX & Branding"}>

                       <Web title={"UI/UX & Branding"}/>
                   </Item>
               </Carousel>
           </div>
       )
    }
}

export default CarouselPage;