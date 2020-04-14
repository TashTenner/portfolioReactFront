import React, { Component } from 'react';
import styled from 'styled-components';

const EtymologyBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const TitleEtymology = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

class Etymology extends Component {
  render() {
    return (
      <EtymologyBox>
        <TitleEtymology><span role="img" aria-label="construction">🚧</span> Etymology</TitleEtymology>
        <StyledDiv>Etymology - Origin and underlying meaning of a word</StyledDiv>
      </EtymologyBox>

    );
  }
}

export default Etymology;