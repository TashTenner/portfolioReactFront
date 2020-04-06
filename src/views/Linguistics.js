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

const MarginTB = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TitleLinguistics = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledLi = styled.li`
  margin: 0.5rem 2rem;
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
          <SubTitle>Degree:</SubTitle>
          <ul>
            <StyledLi>M.A. in Spanish & Russian Linguistics & Literature, and Educational Science, FSU Jena / Germany, 2010</StyledLi>
          </ul>
          <SubTitle>Research interests:</SubTitle>
          <ul>
            <StyledLi>Phonetics & Phonology</StyledLi>
            <StyledLi>Phonosemantics / Sound Symbolism, "R"-sound accross languages</StyledLi>
            <StyledLi>Codeswitching / Multilingualism</StyledLi>
            <StyledLi>Indo-European linguistics</StyledLi>
            <StyledLi>Evolutionary approach to language variation and change</StyledLi>
            <StyledLi>Language Teaching experience</StyledLi>
            <StyledLi>Etymology and linguistic reconstruction</StyledLi>
            <StyledLi>Chomsky's Language Acquisition Device</StyledLi>
          </ul>
          <SubTitle>Scholarships:</SubTitle>
          <ul>
            <StyledLi>Costa Rica, internship Paniamor, 2009</StyledLi>
            <StyledLi>Birkbeck University of London, internship, 2010</StyledLi>
            <StyledLi>London Metropolitan University, DAAD, 2013-2014</StyledLi>
            <StyledLi>Paris Alliance Francaise, language course, 2014</StyledLi>
            <StyledLi>Istituto Venezia, language course, 2014</StyledLi>
          </ul>
          <SubTitle>Taught in:</SubTitle>
          <ul>
            <StyledLi>Wellington, New Zealand, 2010/2011</StyledLi>
            <StyledLi>London, UK, 2011 - 2014</StyledLi>
            <StyledLi>Paris, France, 2014 - 2015</StyledLi>
            <StyledLi>Barcelona, Spain, 2015 - 2017</StyledLi>
          </ul>
          <SubTitle>Reviewing, editorial activity:</SubTitle>
          <ul>
            <StyledLi>London, Mary Glasgow Magazines, 2011/2012</StyledLi>
          </ul>
        </LeftBox>
        <Links>
          <MarginTB>
            <p>Thoughts about linguistic curiosities:</p>
            <StyledLink to="/linguistics/posts">Posts</StyledLink>
          </MarginTB>
          <MarginTB>
            <p>First steps into recording a Podcast - in Spanish only:</p>
            <StyledLink to="/linguistics/podcast">Podcast</StyledLink>
          </MarginTB>
          <MarginTB>
            <p>Visualisation of sounds & linguistic concepts - in Spanish and English:</p>
            <StyledLink to="/linguistics/infographics">Infographics</StyledLink>
          </MarginTB>
          <MarginTB>
            <p>Phonology & Sound Symbolism - From a pointy "i" to a voluminous "a" and "o":</p>
            <StyledLink to="/linguistics/phonology"><span role="img" aria-label="construction">🚧</span> Phonology</StyledLink>
          </MarginTB>
          <MarginTB>
            <p>Etymology - Origin and underlying meaning of a word:</p>
            <StyledLink to="/linguistics/etymology"><span role="img" aria-label="construction">🚧</span> Etymology</StyledLink>
          </MarginTB>
          <MarginTB>
            <p>Lessons - German for Spanish speakers:</p>
            <StyledLink to="/linguistics/lessons"><span role="img" aria-label="construction">🚧</span> Lessons</StyledLink>
          </MarginTB>
        </Links>
      </LinguisticsBox>
    );
  }
}

export default Linguistics;