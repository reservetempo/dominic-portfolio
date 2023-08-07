
import { styled } from "styled-components";
import About from './About';
import Works from './Works';
import Contact from './Contact';
import landscape from "../images/landscape.jpeg";
import { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import DraggableImg from "./DraggableImg";

const Homepage = () => {
    console.clear();
  
    return (
        <div>
            <StyledFlexwrapper>
                <StyledFlexwrapper>
                    {/* <StyledManicule>☞</StyledManicule> */}
                    <h1>Dominic</h1>
                </StyledFlexwrapper>
                <h1>Riffou-</h1>
                <h1>Loomes</h1>
            </StyledFlexwrapper>
            <DraggableImg />
            
            <div id="works">
                <Works />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
        
    )
}

const StyledFlexwrapper = styled.div`
    /* display: flex; */
    /* line-height: 180px; */
    /* flex-wrap: wrap; */
    /* margin-top: 30px; */
`
const StyledLandscapeWrapper = styled.div`
    border: 5px solid red;
    overflow: hidden;
`
const StyledImg = styled.img`
    position: relative;
    left: ${(props) => (props.landscapeLeft) + "px"};
    height: 100vh;
    -webkit-user-drag: none;
    user-select: none;
`
export default Homepage