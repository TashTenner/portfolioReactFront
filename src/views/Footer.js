import React from 'react';
import styled from 'styled-components';
import arroba from '../assets/arroba.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

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
    <StyledLinkFooter href="https://github.com/TashTenner" title="GitHub" target="_blank"><img src={github} rel="noopener noreferrer" alt="GitHub"></img></StyledLinkFooter>
    <StyledLinkFooter href="https://www.linkedin.com/in/tashtenner/" title="LinkedIn" target="_blank"><img src={linkedin} rel="noopener noreferrer" alt="LinkedIn"></img></StyledLinkFooter>
    <StyledLinkFooter href="mailto:mail@gettash.dev?subject=Hi" title="Mail" ><img src={arroba} rel="noopener noreferrer" alt="Mail"></img></StyledLinkFooter>
  </Styles >
)