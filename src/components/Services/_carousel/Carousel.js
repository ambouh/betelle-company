import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from "./CarouselContainer";
import Wrapper from "./Wrapper";
import CarouselSlot from "./CarouselSlot";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
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

    render(){
        const {title, children} = this.props;

        return (
            <div>
                <h2>{ title }</h2>
                <Wrapper>
                    <CarouselContainer>
                        {children.map((child, index)=> (
                            <CarouselSlot
                                key= { index }
                                order = { this.getOrder(index) }
                            >
                                {child}
                            </CarouselSlot>
                            )
                        )}
                    </CarouselContainer>
                </Wrapper>
            </div>
        )
    }
}

export default Carousel;