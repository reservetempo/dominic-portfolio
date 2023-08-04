import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { styled } from "styled-components";

const Header = () => {
  return (
      <StyledNavbar>
        <StyledButton><StyledManicule>☞</StyledManicule></StyledButton>
        <StyledFlexWrapper>
          
          <StyledLink smooth to="/#about" >About</StyledLink>
          <StyledLink smooth to="/#works" >Works</StyledLink>
          <StyledLink smooth to="/#contact" >Contact</StyledLink>
        </StyledFlexWrapper>
      </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
    position: fixed;
    width: 100vw;
    text-align: center;
    top: 0;
    border-bottom: 1px solid black;
    background-color: var(--white);
    z-index: 3;
`
const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  /* opacity: 0; */
  /* border-bottom: 2px solid black; */
  padding: 10px 0 10px;
`
const StyledLink = styled(HashLink)`
  color: black;
  text-decoration: none;
  font-family: var(--jost);
  font-size: 20px;
`
const StyledButton = styled.button`
    -webkit-transform: rotate(270deg);  /* to support Safari and Android browser */
    -ms-transform: rotate(270deg);      /* to support IE 9 */
    transform: rotate(270deg);
    border: none;
    /* border-radius: 50px; */
    width: 80px;
    height: 100px;
    margin: none;
    position: fixed;
    top: 26px;
    left: 0px;
    display: none;
    
`
const StyledManicule = styled.span`
    font-size: 50px;
`
export default Header