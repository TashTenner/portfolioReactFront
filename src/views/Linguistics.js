import React, { Component } from 'react';
import { MarginH1, StyledLinkRouter, H2Title, MediaQueriesBox, LeftBox, StyledLi, MarginTB, LinksWithMedia } from "../views/Styles";

class Linguistics extends Component {
  render() {
    return (
      <MediaQueriesBox>
        <LeftBox>
          <MarginH1>Linguistics</MarginH1>
          <H2Title>Degree:</H2Title>
          <ul>
            <StyledLi>M.A. in Spanish & Russian Linguistics & Literature, and Educational Science, FSU Jena / Germany, 2010</StyledLi>
          </ul>
          <H2Title>Research interests:</H2Title>
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
          <H2Title>Scholarships:</H2Title>
          <ul>
            <StyledLi>Costa Rica, internship Paniamor, 2009</StyledLi>
            <StyledLi>Birkbeck University of London, internship, 2010</StyledLi>
            <StyledLi>London Metropolitan University, DAAD, 2013-2014</StyledLi>
            <StyledLi>Paris Alliance Francaise, language course, 2014</StyledLi>
            <StyledLi>Istituto Venezia, language course, 2014</StyledLi>
          </ul>
          <H2Title>Taught in:</H2Title>
          <ul>
            <StyledLi>Wellington, New Zealand, 2010/2011</StyledLi>
            <StyledLi>London, UK, 2011 - 2014</StyledLi>
            <StyledLi>Paris, France, 2014 - 2015</StyledLi>
            <StyledLi>Barcelona, Spain, 2015 - 2017</StyledLi>
          </ul>
          <H2Title>Reviewing, editorial activity:</H2Title>
          <ul>
            <StyledLi>London, Mary Glasgow Magazines, 2011/2012</StyledLi>
          </ul>
        </LeftBox>
        <LinksWithMedia>
          <MarginTB>
            <p>Thoughts about linguistic curiosities:</p>
            <StyledLinkRouter to="/linguistics/posts">Posts</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>First steps into recording a Podcast - in Spanish only:</p>
            <StyledLinkRouter to="/linguistics/podcast">Podcast</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Visualisation of sounds & linguistic concepts - in Spanish and English:</p>
            <StyledLinkRouter to="/linguistics/infographics">Infographics</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Phonology & Sound Symbolism - From a pointy "i" to a voluminous "a" and "o":</p>
            <StyledLinkRouter to="/linguistics/phonology"><span role="img" aria-label="construction">🚧</span> Phonology</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Etymology - Origin and underlying meaning of a word:</p>
            <StyledLinkRouter to="/linguistics/etymology"><span role="img" aria-label="construction">🚧</span> Etymology</StyledLinkRouter>
          </MarginTB>
          <MarginTB>
            <p>Lessons - German for Spanish speakers:</p>
            <StyledLinkRouter to="/linguistics/lessons"><span role="img" aria-label="construction">🚧</span> Lessons</StyledLinkRouter>
          </MarginTB>
        </LinksWithMedia>
      </MediaQueriesBox>
    );
  }
}

export default Linguistics;