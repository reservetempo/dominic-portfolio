import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { styled } from "styled-components";

const Header = () => {
  return (
      <StyledNavbar>
        <StyledFlexWrapper>
          <StyledLink smooth to="/#home" >↑</StyledLink>
          <StyledLink smooth to="/#works" >Works</StyledLink>
          <StyledLink smooth to="/#about" >About</StyledLink>
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
    border-bottom: 2px solid var(--white);
    background-color: var(--black);

    z-index: 3;
`
const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`
const StyledTorus = styled.img`
    width: 1.5rem;
  
`
const StyledLink = styled(HashLink)`
  color: black;
  text-decoration: none;
  font-family: var(--jost);
  font-size: 1.25rem;
  color: var(--white);
`
export default Header