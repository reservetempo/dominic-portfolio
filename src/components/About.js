import { styled } from "styled-components";
import React from 'react'
import RollingTitle from "./RollingTitle";
const About = () => {
  return (
    <StyledWrapper>
      <RollingTitle title="About "/>
      <StyledImg src="/assets/images/Dom02.jpg" alt="picture of me"/>
      <p>I am a passionate and endlessly curious person. I have countless hobbies from fermenting and cooking all manner of ingredients, to running in nature, and now coding.</p>
      <p>My biggest drive professionally has been to provide value to others. I believe that there is no end to the power of web interfaces to do just that.</p>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100vw;
`
const StyledImg = styled.img`
    margin: clamp(1em, 5vw, 30em);
    width: clamp(7em, 80vw, 27em);
    filter: grayscale();
`
export default About