
import { styled } from "styled-components";
import About from './About';
import Works from './Works';
import Contact from './Contact';
import { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import ScrollingImg from "./ScrollingImg";
import Loading from "./Loading";
import Connections from "./Connections";
import RollingTitle from "./RollingTitle";

const Homepage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])
  
    return (
        
        <div id="home">
            {/* {loading && 
            <Loading />
            } */}
            {/* <img src="/assets/uv.png" /> */}
            <StyledName>
                <h1>Dominic</h1>
                <StyledFlexwrapper>
                    <h1>Riffou-</h1>
                    <h1>Loomes</h1>
                </StyledFlexwrapper>
            </StyledName>
            

            {/* <h1>Hi, I'm Dominic!</h1>
            <img src="/assets/images/headshot.jpg" style={{width: "20vw"}} />
            <h2>Full-stack developer</h2> */}
            <ScrollingImg />
            {/* <Connections /> */}
            <div id="works">
                <Works />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
        
    )
}

const StyledName = styled.div`
    /* z-index: 1;
    position: absolute; */
`
const StyledOWrapper = styled.div`

`
const SpinningO = styled.h1`
    /* transform: rotateZ(3.14rad);
    transition: transform 3s; */

    animation: 10s linear infinite spinning;
    @keyframes spinning {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
    }
`
const StyledFlexwrapper = styled.div`
    display: flex;
    /* line-height: 180px; */
    flex-wrap: wrap;
    /* margin-top: 30px; */
    @media (min-width: 1066px) {
        margin-bottom: 50px;
    }
`
const StyledLandscapeWrapper = styled.div`
    border: 5px solid red;
    overflow: hidden;
`
const StyledImg = styled.img`
    position: relative;
    left: ${(props) => (props.landscapeLeft) + "px"};
    height: 100vh;
    -webkit-user-drag: none;
    user-select: none;
`
export default Homepage