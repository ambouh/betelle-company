import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from './Device'
const Slot = styled.div`
    flex: 1 0 220px;
    flex-basis: 23.5%;
    margin-right: 20px;
    order: ${(props) => props.order };
    
    @media ${device.sm} {  
        flex-basis: 100%;
    };
    
    @media ${device.md} {  
        flex-basis: 47%;
    };
    
    @media ${device.lg} {  
        flex-basis: 47%;
    } ;   
`;

class CarouselSlot extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
                order
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }
        return (
            <Slot
                order={order}
                className={className}
                onClick={onClick}
            >
                {label}
            </Slot>
        );
    }
}
/*29%-3.25 | */
export default CarouselSlot;