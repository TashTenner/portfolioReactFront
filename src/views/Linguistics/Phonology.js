import React, { Component } from 'react';
import { MarginH1, StyledDiv } from "../Styles";

class Phonology extends Component {
  render() {
    return (
      <>
        <MarginH1><span role="img" aria-label="construction">🚧</span> Phonology</MarginH1>
        <StyledDiv>Phonology & Sound Symbolism - From a pointy "i" to a voluminous "a" and "o"</StyledDiv>
        <StyledDiv>Phonetics looks at physical production, acoustic transmission and perception of the sounds of speech, whereas phonology analyses the way sounds function within a given language or across languages to encode meaning.</StyledDiv>
      </>

    );
  }
}

export default Phonology;