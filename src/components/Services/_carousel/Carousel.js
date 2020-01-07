import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from "./CarouselContainer";
import Wrapper from "./Wrapper";
import CarouselSlot from "./CarouselSlot";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            direction: 'next',
            sliding: false
        }
    }
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node,
    };

    getOrder(itemIndex) { //takes DOM index of an item
        const { position } = this.state; //keeps track of current position
        const { children } = this.props;
        const numItems = children.length || 1;

        if (itemIndex - position < 0) {
            return numItems - Math.abs(itemIndex - position);
        }

        return itemIndex - position; //returns the place an item SHOULD appear in
    }

    nextSlide = () => {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length || 1;

        this.doSliding('next',(position === numItems - 1)? 0: (position + 1))
    };

    prevSlide = () => {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length
        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
    }

    doSliding = (direction, position) => {
      this.setState({
          sliding: true,
          direction: direction,
          position

      });

      setTimeout(() =>{
          this.setState({
              sliding: false
          });
      }, 50)
    };


    render(){
        const {title, children} = this.props;
        const {sliding, position, direction} = this.state;

        return (
            <div>
                <h2>{ title }</h2>
                <Wrapper>
                    <CarouselContainer sliding={sliding} position={position} direction={direction}>
                        {children.map((child, index)=> (
                            <CarouselSlot
                                key= { index }
                                order={ this.getOrder(index) }
                            >
                                {child}
                            </CarouselSlot>
                            )
                        )}

                    </CarouselContainer>
                    <button onClick={ () => this.prevSlide() }>Previous</button>
                    <button onClick={ () => this.nextSlide() }>Next</button>
                </Wrapper>
            </div>
        )
    }
}

export default Carousel;