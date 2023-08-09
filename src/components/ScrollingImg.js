import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";

const ScrollingImg = () => {
    const wrapperRef = useRef(null); 
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scroll = window.scrollY / window.innerHeight;
        setScrollPercentage(Math.min(scroll * 100, 130))
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
  return (
    <StyledLandscapeWrapper ref={wrapperRef}>
            <StyledImg 
            style={{right : (scrollPercentage * 12) + "px"}}
            src="/assets/images/landscape.jpeg"
            alt="landscape image" />
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
export default ScrollingImg