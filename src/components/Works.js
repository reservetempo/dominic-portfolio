import Project from './Project';
import { styled } from "styled-components";
import React from 'react';
import { projects } from "../data";
import RollingTitle from './RollingTitle';

const Works = () => {
  return (
    <StyledWrapper>
      <RollingTitle title="Works "/>
      {projects.map(proj => {
        return (
          <Project 
            key={proj.id} 
            projectName={proj.projectName}
            completed={proj.completed}
            videoSrc={proj.videoSrc}
            imageSrc={proj.imageSrc}
            concept={proj.concept}
            link={proj.link}
            />
        )
      })}  
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100vw;
`
export default Works