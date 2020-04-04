import React from 'react';
import styled from 'styled-components';
import arroba from '../assets/arroba.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import cv from '../assets/cv.png';
import PDF from '../assets/TashCV.pdf';

const Styles = styled.div`
  font-size: 0.8em;
  border-top: 1px solid #002b36ff;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLinkFooter = styled.a`
  margin: 0.5em;
`;

export const Footer = () => (
  <Styles>
    <StyledLinkFooter href={PDF} title="CV" target="_blank" rel="noopener noreferrer"><img src={cv} alt="Download CV"></img></StyledLinkFooter>
    <StyledLinkFooter href="https://www.linkedin.com/in/tashtenner/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Open Tash's LinkedIn"></img></StyledLinkFooter>
    <StyledLinkFooter href="https://github.com/TashTenner" title="GitHub" target="_blank" rel="noopener noreferrer"><img src={github} alt="See Tash's projects on GitHub"></img></StyledLinkFooter>
    <StyledLinkFooter href="mailto:mail@gettash.dev?subject=Hi" title="Mail" rel="noopener noreferrer"><img src={arroba} alt="Send Tash a Mail"></img></StyledLinkFooter>
  </Styles >
)