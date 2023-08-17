
import styled from "styled-components";

const LandscapeIcons = () => {
  return (
    <div>
        <StyledFlexWrapper>
            <StyledIcons>
                <img src="/assets/svgs/html.svg" alt="html logo" />
                <img src="/assets/svgs/css.svg" alt="css logo" />
                <img src="/assets/svgs/javascript.svg" alt="javascript logo" />
                <img src="/assets/svgs/react.svg" alt="react logo" />
                <img src="/assets/svgs/node.svg" alt="node logo" />
                <img src="/assets/svgs/mongo.svg" alt="mongo logo" />
            </StyledIcons>
            
        </StyledFlexWrapper>

        <StyledLandscapeWrapper>
            <StyledImg 
            style={{height : "100 vh", transition: "height 0.01s ease"}}
            src="/assets/images/landscape.jpeg"
            alt="landscape image" />
        </StyledLandscapeWrapper>
    </div>
  )
}

const StyledFlexWrapper = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-content:  space-between;
    width: 100vw;
    p {
        color: var(--black);
        width: 100vw;
        mix-blend-mode: difference;
    }

    >*{
        margin: 0.5rem 0;
    }
`
const StyledIcons = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    >*{
        width: 10vw;
    }
`
const StyledLandscapeWrapper = styled.div`
    overflow: hidden;
`
const StyledImg = styled.img`
    position: relative;
    height: 60vh;
`
export default LandscapeIcons