import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AboutBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const TitleAbout = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

const StyledLinkRouter = styled(Link)`
  color: #268bd2;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

class Contact extends Component {
  render() {
    return (
      <AboutBox>
        <TitleAbout>Contact</TitleAbout>
        <StyledDiv>Feel free to send me an email, look me up on LinkedIn or GitHub, read my posts on Medium or call me on (+34) 644.88.67.23. It's only a stone's throw from here. I am looking forward to hearing from you.</StyledDiv>
        <StyledLinkRouter to="/projects">projects in web development</StyledLinkRouter>
      </AboutBox>
    );
  }
}

export default Contact;