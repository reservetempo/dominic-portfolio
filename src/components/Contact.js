
import React from 'react'
import { styled } from "styled-components";
import RollingTitle from './RollingTitle';

const Contact = () => {
  return (
    <StyledWrapper>
    <RollingTitle title="Contact  " />
    <StyledTextWrapper>
        <p>Please send me an email! I love to meet new people and learn of new avenues in the industry.</p>
        <a href="mailto:driffouloomes@gmail.com?subject=Hello!">driffouloomes@gmail.com</a>
    </StyledTextWrapper>
</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`
const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Contact