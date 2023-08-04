import { Link } from "react-router-dom";
import { styled } from "styled-components";
import About from './About';
import Works from './Works';
import Contact from './Contact';
import landscape from "../images/landscape.jpeg"

const Homepage = () => {
    console.clear()
    return (
        <div>
            <StyledFlexwrapper>
                <StyledFlexwrapper>
                    {/* <StyledManicule>☞</StyledManicule> */}
                    <h1>Dominic</h1>
                </StyledFlexwrapper>
                <h1>Riffou-</h1>
                <h1>Loomes</h1>
            </StyledFlexwrapper>

                

            <h1></h1>
            <StyledImg src={landscape} alt="landscape image" />
            <div id="about">
                <About />
            </div>
            <div id="works">
                <Works />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
        
    )
}

const StyledFlexwrapper = styled.div`
    /* display: flex; */
    /* line-height: 180px; */
    /* flex-wrap: wrap; */
    /* margin-top: 30px; */
`
const StyledImg = styled.img`
    height: 500px;
`
const StyledManicule = styled.span`
    font-size: 80px;
    /* margin: 50px 0 0 20px; */
`
export default Homepage