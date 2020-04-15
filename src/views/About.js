import React, { Component } from 'react';
import tangoRussia from '../assets/tangoRussia.jpg';
import { StyledLink, StyledImageAbout, YellowBrownTag, MarginH1, StyledDiv, QuotePhrase, PhotoBox, StyledLinkRouter, StyledPhotoInfo, SkillsText, H2Title, SecondH2Title, SkillsDiv, DividedSkillsDiv } from "../views/Styles";

class About extends Component {
  render() {
    return (
      <YellowBrownTag>
        <MarginH1>About me</MarginH1>
        <StyledDiv>I’m Tash Tenner, a <span className="yellow-brown">full stack developer & language enthusiast</span>. I currently work full-time and expand my skills in the programming world.</StyledDiv>
        <StyledDiv>The intention of the website is to give an overview of my <StyledLinkRouter to="/projects">projects in web development</StyledLinkRouter>, my past life as a <StyledLinkRouter to="/linguistics">linguist</StyledLinkRouter> and of all those tricky coding problems I came across with during my bootcamp at Ironhack.</StyledDiv>
        <QuotePhrase>If you speak at least one language then you can code, too.</QuotePhrase>
        <StyledDiv>This was my personal motto when I started learning how to code. Learning your mother tongue from birth on is an unconscious process that takes years! No wonder learning a language and code in a conscious way is difficult. But your brain is wired to learn logical concepts. Changing from languages or Linguistics to coding languages, by no means, was not as simple as I hoped it would be. Still, we human beings are amazing creatures and very much capable of learning how to code. In case you are toying with the idea of turning to Web Development, go for it!</StyledDiv>
        <H2Title>Tango music while coding</H2Title>
        <StyledDiv>Dancing the tango on the one hand helps me to wind down and on the other hand, listening to tango music keeps me focused on coding.</StyledDiv>
        <PhotoBox>
          <StyledImageAbout src={tangoRussia} alt="tangoRussia"></StyledImageAbout>
        </PhotoBox>
        <StyledPhotoInfo>Photo by <StyledLink href="https://www.facebook.com/photo.php?fbid=2422920544388652&set=a.2422919301055443&type=3&theater" target="_blank" rel="noopener noreferrer">Sasha Vybornoff</StyledLink> on Facebook</StyledPhotoInfo>
        <SkillsDiv>
          <DividedSkillsDiv>
            <SecondH2Title>Coding skills</SecondH2Title>
            <SkillsText className="no-margin-bottom">Main: JavaScript, React, HTML & CSS, Redux</SkillsText>
            <SkillsText className="no-margin-top">Additional: MongoDB, Express, NodeJS, Bootstrap, Styled Components, Git & GitHub, ES6, Mongoose, RESTful WebServices, Postman, Mapbox, Figma, Balsamiq Wireframes</SkillsText>
          </DividedSkillsDiv>
          <DividedSkillsDiv className="center">
            <SecondH2Title>Linguistic skills</SecondH2Title>
            <SkillsText className="no-margin-bottom">Fluent in: English, German, Spanish, Russian & French</SkillsText>
            <SkillsText className="no-margin-top">Basics in: Armenian, Catalan, Italian, Belarusian & Hebrew</SkillsText>
          </DividedSkillsDiv>
          <DividedSkillsDiv>
            <SecondH2Title>Overseas experience</SecondH2Title>
            <SkillsText>Germany, Armenia, Cuba, Russia, Costa Rica, Belarus, Spain, New Zealand, England, Italy, France, Israel</SkillsText>
          </DividedSkillsDiv>
        </SkillsDiv>
      </YellowBrownTag>
    );
  }
}

export default About;