import React, { Component } from 'react';
import styled from 'styled-components';

const PhonologyBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const TitlePhonology = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

class Phonology extends Component {
  render() {
    return (
      <PhonologyBox>
        <TitlePhonology><span role="img" aria-label="construction">🚧</span> Phonology</TitlePhonology>
        <StyledDiv>Phonology & Sound Symbolism - From a pointy "i" to a voluminous "a" and "o"</StyledDiv>
        <StyledDiv>Phonetics looks at physical production, acoustic transmission and perception of the sounds of speech, whereas phonology analyses the way sounds function within a given language or across languages to encode meaning.</StyledDiv>
      </PhonologyBox>

    );
  }
}

export default Phonology;