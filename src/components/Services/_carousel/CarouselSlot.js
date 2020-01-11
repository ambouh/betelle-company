import React,{Component} from 'react';
import styled from 'styled-components';


const CarouselSlot = styled.div`
    flex: 1 0 220px;
    flex-basis: 21.6%;
    margin-right: 20px;
    order: ${(props) => props.order };
`;

/*class CarouselSlot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div></div>
        );
    }
}*/
/*29%-3.25 | */
export default CarouselSlot;