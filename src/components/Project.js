import styled from "styled-components";
import React from 'react'

const Project = ({projectName, completed, screenshots, concept, link}) => {
  return (
    <StyledWrapper>
      <h3>{projectName}</h3>
      {screenshots && 
      <video autoPlay muted loop>
        <source src={screenshots} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      }
      {/* <h4>Concept</h4> */}
      <p>{concept}</p>
      <p>{completed}</p>

      {link && <a href="#">link to project</a>}

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    border: 2px solid black;
    margin-bottom: 15px;
    padding: 8px;
`


export default Project