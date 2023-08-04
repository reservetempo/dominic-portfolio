import { styled } from "styled-components";
import React from 'react'

const About = () => {
  return (
    <StyledWrapper>
      <h2>About</h2>
      <StyledFlexwrapper>
      <p>I am a passionate and curious human. That seems a bit generic perhaps but I have countless hobbies that still drive me forward. From fermenting and cooking all manner of ingredients, to running in nature, and now coding.</p>
      <p>My goal professionally has always been to find systems to improve the service we provide. I want to keep adding value to the world. I believe that well designed websites can do that by providing people with tools in a way that helps them accomplish what they want more efficiently that before.</p>
      </StyledFlexwrapper>
      
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  /* height: 500px; */
  width: 100vw;
  padding: 15px;
`

const StyledFlexwrapper = styled.div`
    position: relative;
    left: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
`
export default About