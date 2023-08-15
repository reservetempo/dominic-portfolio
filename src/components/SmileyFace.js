import React from 'react'
import { styled } from 'styled-components'
const SmileyFace = () => {
  return (
	<StyledWrapper>
		<StyledSmiley src="/assets/smiley.svg" alt="smiley"/>
	</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5%;
`
const StyledSmiley = styled.img`
	width: 50vw;
	animation: 4s linear infinite spinning;
    @keyframes spinning {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`
export default SmileyFace

