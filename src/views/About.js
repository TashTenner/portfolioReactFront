import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../services/device';
import tangoRussia from '../assets/tangoRussia.jpg';

const StyledImage = styled.img`
  border-radius: 100px;
  height: 175px;
`;

const AboutBox = styled.div`
  @media ${device.sizeInbetween} {
    /* display: flex;
    align-items: flex-start; */
  }
`;

const TitleAbout = styled.h1`
  margin: 2rem 0.5rem;
`;

const WhoDiv = styled.div`
  margin: 2rem 0.5rem;
`;

const IntentionDiv = styled.div`
  margin: 2rem 0.5rem;
`;

const QuotePhrase = styled.h2`
  margin: 2rem 0.5rem;
  font-style: italic;
`;

const MotivationDiv = styled.div`
  margin: 2rem 0.5rem;
`;

const TangoPhrase = styled.h2`
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
`;

const StyledPhotoInfo = styled.p`
  font-size: 0.7rem;
  text-align: center;
  margin: 0rem 0.5rem 2rem;
`;

class About extends Component {
  render() {
    return (
      <>
        <AboutBox>
          <TitleAbout>About me</TitleAbout>
          <WhoDiv>I’m Tash Tenner, a full stack developer & language enthusiast. I currently work full-time and expand my skills in the programming world.</WhoDiv>
          <IntentionDiv>The intention of the website is to give an overview of my projects in web development, my past life as a linguist and of all those tricky coding problems I came across with during my bootcamp at Ironhack.</IntentionDiv>
          <QuotePhrase>If you speak at least one language then you can code, too.</QuotePhrase>
          <MotivationDiv>This was my personal motto when I started learning how to code. Changing my from Linguistics to coding languages, by no means, was not as simple as I hoped it would be. Still, we human beings are amazing creatures and very much capable of learning how to code. Are you toying with the idea of turning to Web Development? Feel free to share your thoughts or doubts with me and I am happy to help you either to start your dream and/or keep on holding to it.</MotivationDiv>
          <TangoPhrase>Listen to tango music and dance it</TangoPhrase>
          <PhotoBox>
            <StyledImage src={tangoRussia} rel="noopener noreferrer" alt="tangoRussia"></StyledImage>
          </PhotoBox>
          <StyledPhotoInfo>Photo by<StyledLink href="https://www.facebook.com/photo.php?fbid=2422920544388652&set=a.2422919301055443&type=3&theater" target="_blank" rel="noopener noreferrer">Sasha Vybornoff</StyledLink>on Facebook</StyledPhotoInfo>


          <div>Tango music while coding</div>
          <div>Coding skills</div>
          <div>HTML, CSS, JavaScript</div>
          <div>Linguistic skills</div>
          <div>English, German, etc</div>
          <div>Overseas experience</div>
          <div>Germany, Armenia, Cuba, etc</div>
          <div>CV | LinkedIn | GitHub | Email</div>
        </AboutBox>
      </>
    );
  }
}

export default About;