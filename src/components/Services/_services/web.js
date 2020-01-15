import React from 'react';
import styled from "styled-components";
import {device} from "../_carousel/Device";

const Wrapper=styled.div`
    display: flex;
    padding: 1rem 3rem;
    @media ${device.md} {
        flex-direction: column;
        padding: 1rem 1rem;
    } 
`;
const Equal = styled.div`
    flex: 1 1 50%;
    @media ${device.sm} {  
        flex: 1 1 100%;
    }
    
    @media ${device.md} {  
        flex: 1 1 100%;
    }    
    @media ${device.lg} {  
        flex: 1 1 100%;
    }    
`;
const Web = (props) => {
    return (
        <Wrapper className={""}>
            <Equal className={"right text"}>
                <h4 className={"h4"}>{props.title}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse accumsan lacus vel facilisis.
                </p>
            </Equal>
        </Wrapper>
    );
};

export default Web;