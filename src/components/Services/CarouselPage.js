import React,{Component} from 'react';
import styled from 'styled-components';

import Carousel from './_carousel/Carousel';

const Item = styled.div`
background: darkorange;
text-align: center;
padding: 50px;
color: white;
`;

class CarouselPage extends Component {
    render(){
       return (
           <div>
               <Carousel
                title={"Carousel"}
               >
                   <Item>Item</Item>
                   <Item>Item</Item>
                   <Item>Item</Item>
                   <Item>Item</Item>
               </Carousel>
           </div>
       )
    }
}

export default CarouselPage;