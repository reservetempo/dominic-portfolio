import React from 'react'
import styled from "styled-components";
const RollingTitle = ({title}) => {
  return (
    <StyledH2Wrapper>
        <h2> {title}</h2> 
        <h2> {title}</h2> 
        <h2> {title}</h2>
        <h2> {title}</h2> 
        <h2> {title}</h2> 
    </StyledH2Wrapper>
  )
}

const StyledH2Wrapper = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100vw;
    h2 {
  font-family: var(--baskerville);
  /* font-size: 8em; */
  font-weight: 300;
  animation: looping 10s linear infinite;
  /* padding: 2rem 0; */

  @keyframes looping {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  } 
}
`
export default RollingTitle