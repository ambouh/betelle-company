import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;overflow: hidden;
  display: flex;
  margin: 0 0 20px 0px;
  transition: transform 2s ease;
  transform: translateX(calc(0%));
`

export default CarouselContainer;