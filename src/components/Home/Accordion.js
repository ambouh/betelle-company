import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);

        const openSections = {};

        this.state = { openSections };
    }

    onClick = label => {
        const {
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
            openSections: {
                [label]: !isOpen
            }
        });
    };

    render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <div >
                {children.map((child, index, array) => (

                    <AccordionSection
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        onClick={onClick}
                        key={index}
                        sectionStyle={ (children.length -1 === index)? 'accordionWrapperStyleLast' : 'accordionWrapperStyle'}
                    >
                        {child.props.children}
                    </AccordionSection>
                    ))}
            </div>
        );
    }
}

export default Accordion;