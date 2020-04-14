import React, { Component } from 'react';
import styled from 'styled-components';

const LessonsBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const TitleLessons = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

class Lessons extends Component {
  render() {
    return (
      <LessonsBox>
        <TitleLessons><span role="img" aria-label="construction">🚧</span> Lessons</TitleLessons>
        <StyledDiv>Lessons - German for Spanish speakers</StyledDiv>
      </LessonsBox>

    );
  }
}

export default Lessons;