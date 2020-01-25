import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import styled from 'styled-components';
import { device } from '../services/device';
import tashIcon from '../assets/tashIcon.jpeg';

const Loop = styled.div`
  color: #212529;
  margin-top: 3em;
  margin-bottom: 2em;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    margin: 2rem 1rem;
    padding: 1.5rem;
    text-align: center;
    background: #268bd280; 
`;

const StyledLink = styled(Link)`
  color: #268bd2;
  text-decoration: underline;
    &:hover {
      color: #fcfcff;
    }
    &.active {
      color: #212529;
    }
    &:focus {
      color: #212529;
  }
`;

const IntroBox = styled.div`
  @media ${device.sizeInbetween} {
    display: flex;
    align-items: flex-start;
  }
`;

const LeftIntro = styled.div`
  margin: 2rem 1rem;
`;

const PhotoIcon = styled.div`
  margin: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  border-radius: 100px;
  box-shadow: 0 4px 28px 0 #212529, 0 6px 20px 0 #000000;
  height: 100px;
  &:hover {
    box-shadow: 0 4px 48px 0 #212529, 0 6px 20px 0 #000000;
    }
`;

class Home extends Component {
  render() {
    return (
      <>
        <IntroBox>
          <LeftIntro>
            <h1>Hi! I am Tash,</h1>
            <h2>A Linguist who became a Full Stack Web Developer</h2>
            <Loop>
              <TextLoop interval={900} springConfig={{ stiffness: 180, damping: 80 }}>
                <p>#Linguist</p>
                <p>#Web Developer</p>
                <p>#Traveller</p>
                <p>#Tango dancer</p>
                <p>#Cat lover</p>
                <p>#Multilingual</p>
                <p>#German native</p>
                <p>#Barcelona based</p>
                <p>#Healthy food</p>
              </TextLoop>
            </Loop>
          </LeftIntro>
          <PhotoIcon>
            <Link to="/about" title="About me">
              <StyledImage src={tashIcon} rel="noopener noreferrer" alt="tashIcon"></StyledImage>
            </Link>
          </PhotoIcon>
          <Links>
            <div>
              <p>Sneak into my past:</p>
              <StyledLink to="/linguistics">Linguistic projects</StyledLink>
            </div>
            <div>
              <p>Discover my present:</p>
              <StyledLink to="/projects">Web Development projects</StyledLink>
            </div>
            <div>
              <p>Create synergies with me in the future:</p>
              <StyledLink to="/contact">Contact me</StyledLink>
            </div>
          </Links>
        </IntroBox>
      </>
    );
  }
}

export default Home;
