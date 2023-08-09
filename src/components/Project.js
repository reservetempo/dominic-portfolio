import styled from "styled-components";
import React from 'react'

const Project = ({projectName, completed, videoSrc, imageSrc, concept, link}) => {
  console.log(imageSrc)
  return (
    <StyledWrapper>
      {videoSrc && 
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      }
      {imageSrc &&
      <StyledImg src={imageSrc} alt={`image of ${projectName}`} />
      }
      <h3>{projectName}</h3>
      <h4>{!completed && "(Work in progress)"}</h4>
      <p>{concept}</p>

      {link && <a href="#">link to project</a>}

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    border-bottom: 2px solid black;
    margin-bottom: 15px;
    padding-bottom: 15px;
`
const StyledImg = styled.img`
    width: 90vw;
    /* margin: 5%; */
`


export default Project