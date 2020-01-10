import styled from 'styled-components';

const CarouselSlot = styled.div`
    flex: 1 0 220px;
    flex-basis: 21.6%;
    margin-right: 20px;
    order: ${(props) => props.order };
`;

/*29%-3.25 | */
export default CarouselSlot;