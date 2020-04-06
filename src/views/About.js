import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../services/device';
import tangoRussia from '../assets/tangoRussia.jpg';

const AboutBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const StyledImage = styled.img`
  border-radius: 20px;
  height: 175px;
`;

const TitleAbout = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

const QuotePhrase = styled.h2`
  margin: 2rem 0.5rem;
  font-style: italic;
`;

const PhotoBox = styled.div`
  margin: 2rem 0.5rem 0rem;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  margin: 0.5em;
  color: #268bd2;
  font-weight: bold;
`;

const StyledLinkRouter = styled(Link)`
  color: #268bd2;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

const StyledPhotoInfo = styled.p`
  font-size: 0.7rem;
  text-align: center;
  margin: 0rem 0.5rem 2rem;
`;

const TangoTitle = styled.h2`
  margin: 2rem 0.5rem;
  font-weight: bold;
`;

const SkillsDiv = styled.div`
  .center {
    @media ${device.sizeInbetween} {
      margin: 0rem 1.5rem;
    }
  }
  margin: 2rem 0.5rem;
  @media ${device.sizeInbetween} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const DividedSkillsDiv = styled.div`
  @media ${device.sizeInbetween} {
    width: 33%;
  }
  .no-margin-bottom {
    @media ${device.sizeInbetween} {
      margin-bottom: 0;
    }
  }
  .no-margin-top {
    @media ${device.sizeInbetween} {
      margin-top: 0;
    }
  }
`;

const SkillsTitle = styled.h2`
  margin: 2rem 0rem;
  font-weight: bold;
  @media ${device.sizeInbetween} {
    height: 1.75em;
  }
`;

const SkillsText = styled.p`
  text-align: justify;
  margin: 2rem 0rem;
`;

class About extends Component {
  render() {
    return (
      <AboutBox>
        <TitleAbout>About me</TitleAbout>
        <StyledDiv>I’m Tash Tenner, a <span className="yellow-brown">full stack developer & language enthusiast</span>. I currently work full-time and expand my skills in the programming world.</StyledDiv>
        <StyledDiv>The intention of the website is to give an overview of my <StyledLinkRouter to="/projects">projects in web development</StyledLinkRouter>, my past life as a <StyledLinkRouter to="/linguistics">linguist</StyledLinkRouter> and of all those tricky coding problems I came across with during my bootcamp at Ironhack.</StyledDiv>
        <QuotePhrase>If you speak at least one language then you can code, too.</QuotePhrase>
        <StyledDiv>This was my personal motto when I started learning how to code. Learning your mother tongue from birth on is an unconscious process that takes years! No wonder learning a language and code in a conscious way is difficult. But your brain is wired to learn logical concepts. Changing from languages or Linguistics to coding languages, by no means, was not as simple as I hoped it would be. Still, we human beings are amazing creatures and very much capable of learning how to code. In case you are toying with the idea of turning to Web Development, go for it!</StyledDiv>
        <TangoTitle>Tango music while coding</TangoTitle>
        <StyledDiv>Dancing the tango on the one hand helps me to wind down and on the other hand, listening to tango music keeps me focused on coding.</StyledDiv>
        <PhotoBox>
          <StyledImage src={tangoRussia} alt="tangoRussia"></StyledImage>
        </PhotoBox>
        <StyledPhotoInfo>Photo by<StyledLink href="https://www.facebook.com/photo.php?fbid=2422920544388652&set=a.2422919301055443&type=3&theater" target="_blank" rel="noopener noreferrer">Sasha Vybornoff</StyledLink>on Facebook</StyledPhotoInfo>
        <SkillsDiv>
          <DividedSkillsDiv>
            <SkillsTitle>Coding skills</SkillsTitle>
            <SkillsText className="no-margin-bottom">Main: JavaScript, React, HTML & CSS, Redux</SkillsText>
            <SkillsText className="no-margin-top">Additional: MongoDB, Express, NodeJS, Bootstrap, Styled Components, Git & GitHub, ES6, Mongoose, RESTful WebServices, Postman, Mapbox, Balsamiq Wireframes</SkillsText>
          </DividedSkillsDiv>
          <DividedSkillsDiv className="center">
            <SkillsTitle>Linguistic skills</SkillsTitle>
            <SkillsText className="no-margin-bottom">Fluent in: English, German, Spanish, Russian & French</SkillsText>
            <SkillsText className="no-margin-top">Basics in: Armenian, Catalan, Italian, Belarusian & Hebrew</SkillsText>
          </DividedSkillsDiv>
          <DividedSkillsDiv>
            <SkillsTitle>Overseas experience</SkillsTitle>
            <SkillsText>Germany, Armenia, Cuba, Russia, Costa Rica, Belarus, Spain, New Zealand, England, Italy, France, Israel</SkillsText>
          </DividedSkillsDiv>
        </SkillsDiv>
      </AboutBox>
    );
  }
}

export default About;