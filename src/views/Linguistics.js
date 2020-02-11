import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../services/device';

const LinguisticsBox = styled.div`
  @media ${device.sizeInbetween} {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;

  }
`;

const LeftBox = styled.div`
  @media ${device.sizeInbetween} {
    width: 66%;
  }
`;

const TitleLinguistics = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledLi = styled.li`
  margin: 0.5rem 2rem;
  text-align: justify;
  list-style-type: circle;
`;

const SubTitle = styled.h2`
  margin: 2rem 0.5rem;
  font-weight: bold;
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
  @media ${device.sizeInbetween} {
    width: 33%;
    position: sticky; 
    top: 50px;
  }
`;

const StyledLink = styled(Link)`
  color: #268bd2;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

class Linguistics extends Component {
  render() {
    return (
      <LinguisticsBox>
        <LeftBox>
          <TitleLinguistics>Linguistics</TitleLinguistics>
          <SubTitle>Degrees:</SubTitle>
          <ul>
            <StyledLi>M.A. in English, Jena / Germany, 2010</StyledLi>
          </ul>
          <SubTitle>Research interests:</SubTitle>
          <ul>
            <StyledLi>Phonology</StyledLi>
            <StyledLi>Theories of language change</StyledLi>
            <StyledLi>History of English</StyledLi>
            <StyledLi>Indo-European and Germanic linguistics</StyledLi>
            <StyledLi>Evolutionary approach to language variation and change</StyledLi>
            <StyledLi>Teaching experience</StyledLi>
            <StyledLi>English phonetics and phonology</StyledLi>
            <StyledLi>Etymology and linguistic reconstruction</StyledLi>
            <StyledLi>TEFL at university level</StyledLi>
          </ul>
          <SubTitle>Scholarships:</SubTitle>
          <ul>
            <StyledLi>Costa Rica, 2009</StyledLi>
            <StyledLi>Londres 1, 2010</StyledLi>
            <StyledLi>Londres 2 2013-2014</StyledLi>
            <StyledLi>Paris, 201???????</StyledLi>
            <StyledLi>Venezia, 201??????</StyledLi>
          </ul>
          <SubTitle>Taught in:</SubTitle>
          <ul>
            <StyledLi>Wellington NZ 2010/2011</StyledLi>
            <StyledLi>Venezia, 201??????</StyledLi>
          </ul>
          <SubTitle>Reviewing, editorial activity</SubTitle>
          <ul>
            <StyledLi>Londres, translation</StyledLi>
            <StyledLi>Londres, German magazine</StyledLi>
          </ul>
          <SubTitle>Research projects</SubTitle>
          <ul>
            <StyledLi>"R"-sound accross languages</StyledLi>
          </ul>
        </LeftBox>
        <Links>
          <div>
            <p>Posts:</p>
            <StyledLink to="/linguistics/posts">Posts</StyledLink>
          </div>
          <div>
            <p>Podcast:</p>
            <StyledLink to="/linguistics/podcast">Podcast</StyledLink>
          </div>
          <div>
            <p>Infographics:</p>
            <StyledLink to="/linguistics/infographics">Infographics</StyledLink>
          </div>
          <div>
            <p>Phonetics:</p>
            <StyledLink to="/linguistics/phonetics">Phonetics</StyledLink>
          </div>
          <div>
            <p>Etymology:</p>
            <StyledLink to="/linguistics/etymology">Etymology</StyledLink>
          </div>
          <div>
            <p>Lessons:</p>
            <StyledLink to="/linguistics/lessons">Lessons</StyledLink>
          </div>
        </Links>
      </LinguisticsBox>
    );
  }
}

export default Linguistics;