
import { styled } from "styled-components";
import About from './About';
import Works from './Works';
import Contact from './Contact';
import LandscapeIcons from "./LandscapeIcons";

const Homepage = () => {
    return (
        <div id="home">
            <h1>Dominic</h1>
            <StyledFlexwrapper>
                <h1>Riffou-</h1>
                <h1>Loomes</h1>
            </StyledFlexwrapper>
            <LandscapeIcons />
            
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

const StyledFlexwrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1066px) {
        margin-bottom: 50px;
    }
`
export default Homepage