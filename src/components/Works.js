import Project from './Project';
import { styled } from "styled-components";
import React from 'react';
import { projects } from "../data";
import RollingTitle from './RollingTitle';
// import nyanCat from "../videos/nyanCat.mp4";

const Works = () => {
  console.clear();
  console.log(projects)
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
  /* height: 500px; */
  width: 100vw;
`
// const StyledH2Wrapper = styled.div`
//     display: flex;
//     position: relative;
//     overflow: hidden;
//     width: 100vw;
//     h2 {
//   font-family: var(--baskerville);
//   /* font-size: clamp(4rem, 1rem + 15vw, 15rem); */
//   font-size: 12em;
//   font-weight: 300;
//   animation: looping 10s linear infinite;

//   @keyframes looping {
//     from {
//       transform: translateX(0%);
//     }
//     to {
//       transform: translateX(-100%);
//     }
//   } 
// }
// `

export default Works