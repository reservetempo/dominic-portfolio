import styled from "styled-components";
import React from 'react';

const Loading = () => {
  return (
    <StyledWrapper>
      <StyledO>O</StyledO>
      {/* <StyledO src="/assets/O.svg" alt="spinning loader" /> */}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
      position: absolute;
      z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: var(--white);
      
`
const StyledO = styled.h1`
    width: 40vw;
    /* animation: 2s linear infinite spinning;
    @keyframes spinning {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    } */
`
const StyledTorus = styled.img`
    width: 20vw;
    animation: 2s linear infinite spinning;
    @keyframes spinning {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
`

export default Loading