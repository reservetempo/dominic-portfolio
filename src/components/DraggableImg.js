import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable';
import styled from "styled-components";
import landscape from "../images/landscape.jpeg";

const DraggableImg = () => {
    const wrapperRef = useRef(null); 
  return (
    <StyledLandscapeWrapper ref={wrapperRef}>
        <Draggable axis='x' >
            <StyledImg 
            src={landscape}
            alt="landscape image" />
        </Draggable>
    </StyledLandscapeWrapper>
  )
}

const StyledLandscapeWrapper = styled.div`
    overflow: hidden;
`
const StyledImg = styled.img`
    position: relative;
    height: 100vh;
    -webkit-user-drag: none;
    user-select: none;
`
export default DraggableImg