import { styled } from "styled-components";
import React from 'react'
import headshot from "../images/headshot.jpg"
import RollingTitle from "./RollingTitle";
const About = () => {
  return (
    <StyledWrapper>
      <RollingTitle title="About "/>
      <StyledHeadshot src={headshot} alt="picture of me"/>
      <StyledFlexwrapper>
      <p>I am a passionate and endlessly curious person. I have countless hobbies from fermenting and cooking all manner of ingredients, to running in nature, and now coding.</p>
      <p>My biggest drive professionally has been to provide value to others. I believe that there is no end to the power of web interfaces to do just that.</p>
      </StyledFlexwrapper>
      
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  /* height: 500px; */
  width: 100vw;
`
const StyledHeadshot = styled.img`
    margin: clamp(1em, 5vw, 30em);
    width: clamp(7em, 80vw, 27em);
    filter: grayscale();
    
`
const StyledFlexwrapper = styled.div`
    position: relative;
    left: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
`
export default About