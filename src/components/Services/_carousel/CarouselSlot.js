import styled from 'styled-components';

const CarouselSlot = styled.div`
    flex: 1 0 0%;
    flex-basis: 20%;
    margin-right: 20px;
    order: ${(props) => props.order };
`;


export default CarouselSlot;