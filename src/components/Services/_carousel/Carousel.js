import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from "./CarouselContainer";
import Wrapper from "./Wrapper";
import CarouselSlot from "./CarouselSlot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Item from "./Item";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            direction: 'next',
            sliding: false,
            activeTab: this.props.children[0].props.label,
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
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length ;
        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
    }

    doSliding = (direction, position) => {
      this.setState({
          sliding: true,
          direction: direction,
          position: position

      });

      setTimeout(() =>{
          this.setState({
              sliding: false
          });
      }, 50)
    };

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render(){
        const {title, children} = this.props;
        const {sliding, position, direction, activeTab} = this.state;

        return (
                <Wrapper>
                    <div className={"carousel"}>
                    <button onClick={ () => this.prevSlide() }><FontAwesomeIcon icon={faAngleLeft} size="3x"/></button>
                    <CarouselContainer sliding={sliding} position={position} direction={direction}>
                        {children.map((child, index) => {
                            const { label } = child.props;

                            return (
                                <CarouselSlot
                                    key= { index }
                                    order={ this.getOrder(index) }
                                    onClick={this.onClickTabItem}
                                >
                                    <Item>{label}</Item>
                                </CarouselSlot>
                            )
                        })}
                    </CarouselContainer>
                    <button><FontAwesomeIcon icon={faAngleRight} size="3x"  onClick={ () => this.nextSlide() } /></button>
                    </div>
                    <div className="tab-content">
                        {children.map((child) => {
                            if (child.props.label !== activeTab) return undefined;
                            return child.props.children;
                        })}
                    </div>
                </Wrapper>

        )
    }
}

export default Carousel;