import Project from './Project';
import { styled } from "styled-components";
import React from 'react';
import { projects } from "../data";
// import nyanCat from "../videos/nyanCat.mp4";

const Works = () => {
  console.clear();
  console.log(projects)
  return (
    <StyledWrapper>
      <h2><StyledManicule>☞</StyledManicule>Works</h2>
      {/* <video autoPlay muted loop>
        <source src={ nyanCat } type="video/mp4"></source>
      </video> */}
      {projects.map(proj => {
        return (
          <Project 
            key={proj.id} 
            projectName={proj.projectName}
            completed={proj.completed}
            screenshots={proj.screenshots}
            concept={proj.concept}
            link={proj.link}
            />
        )
      })}  
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  /* height: 500px; */
  width: 100vw;
`
const StyledManicule = styled.span`
    font-size: 100px;
    font-weight: 300;
`
export default Works