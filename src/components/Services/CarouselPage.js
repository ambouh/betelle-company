import React,{Component} from 'react';
import styled from 'styled-components';

import Carousel from './_carousel/Carousel';

const Item = styled.div`
    background: #2b8ec8;
    text-align: center;
    color: white;
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 20px
`;

class CarouselPage extends Component {
    render(){
       return (
           <div>
               <Carousel
                title={"Carousel"}
               >
                   <Item>Web Application</Item>
                   <Item>Mobile Application</Item>
                   <Item>.NET Framework</Item>
                   <Item>Relational Databases</Item>
                   <Item>SharePoint</Item>
                   <Item>Online Branding</Item>
               </Carousel>
           </div>
       )
    }
}

export default CarouselPage;