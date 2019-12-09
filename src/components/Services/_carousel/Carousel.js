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

        this.setState({
            position: (position === numItems - 1)? 0: (position + 1)
        });
    };

    doSliding = (position) => {
      this.setState({
          sliding: true,
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
        const {sliding} = this.state;

        return (
            <div>
                <h2>{ title }</h2>
                <Wrapper>
                    <CarouselContainer sliding={sliding}>
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
                    <button onClick={ () => this.nextSlide() }>Next</button>
                </Wrapper>
            </div>
        )
    }
}

export default Carousel;