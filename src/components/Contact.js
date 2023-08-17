
import React, { useRef, useState } from 'react'
import { styled } from "styled-components";
import RollingTitle from './RollingTitle';
import SmileyFace from './SmileyFace';

const Contact = () => {
  const [inputValue, setInputValue] = useState(null);
  const textareaRef = useRef(null);
  const handleSubmit = (ev) => {
      ev.preventDefault();
      alert(inputValue);
      textareaRef.current.value = "";
  }

  return (
    <StyledWrapper>
    <RollingTitle title="Contact  " />
    <StyledTextWrapper>
        <p>Please send me an message! I love to meet new people and learn of new avenues in the industry.</p>
        {/* <a href="mailto:driffouloomes@gmail.com?subject=Hello!">driffouloomes@gmail.com</a> */}
    </StyledTextWrapper>
    <StyledForm onSubmit={handleSubmit}>
        <textarea
        ref={textareaRef}
        placeholder="write me a message here!" 
        onChange={(e) => {setInputValue(e.target.value)}}></textarea>
        <input type="submit" value="Send message" />
    </StyledForm>
    
    <SmileyFace />
</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`
const StyledTextWrapper = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
      font-size: 1.5rem;
    }
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
      width: 50ch;
      margin: 5%;
    }

    input {
      width: 30ch;
    }
`
export default Contact