
import React from 'react'
import { styled } from "styled-components";

const Contact = () => {
  return (
    <StyledWrapper>
    <h2>Contact</h2>
    <p>Please send me an email!</p>
    <a href="mailto:driffouloomes@gmail.com?subject=Hello!">driffouloomes@gmail.com</a>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 500px;
  width: 100vw;
`
export default Contact