import styled from 'styled-components';
import { device } from './Device'
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin: 0 0 0px 0px;
  transition:${(props) => !props.sliding? 'none' : 'transform 2s ease'};
 transform: ${(props) => {
     if (!props.sliding) return 'translateX(calc(0%))'
     if (props.direction === 'prev') return 'translateX(calc(2 * (10%)))'
     return 'translateX(0%)'
}
};
    @media ${device.sm} {  
        width: 80%;
        
    }; 
`;

export default CarouselContainer;
