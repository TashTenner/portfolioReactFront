import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import tashIcon from '../assets/tashIcon.jpeg';
import { StyledImageHome, StyledLinkRouter, MediaQueriesBox, Loop, Links, LeftIntro, PhotoIcon, MarginTB } from "../views/Styles";

class Home extends Component {
  render() {
    return (
      <MediaQueriesBox>
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
              <p>#Healthy foodie</p>
            </TextLoop>
          </Loop>
        </LeftIntro>
        <PhotoIcon>
          <Link to="/about" title="About me">
            <StyledImageHome src={tashIcon} rel="noopener noreferrer" alt="Icon of Tash Tenner"></StyledImageHome>
          </Link>
        </PhotoIcon>
        <Links>
          <MarginTB>
            <p>Sneak into my past:</p>
            <StyledLinkRouter to="/linguistics">Linguistics</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Discover my present:</p>
            <StyledLinkRouter to="/projects">Web Development projects</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Create synergies with me in the future:</p>
            <StyledLinkRouter to="/contact">Contact me</StyledLinkRouter>
          </MarginTB>
        </Links>
      </MediaQueriesBox>
    );
  }
}

export default Home;
