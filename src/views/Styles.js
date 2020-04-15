import styled from 'styled-components'
import { Link } from "react-router-dom";
import { device } from '../services/device';
import quoteTash from '../assets/quoteTash.jpg';
import { SplitButton } from 'react-bootstrap';

export const Styles = styled.div`
  font-size: 0.8em;
  border-top: 1px solid #002b36ff;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StylesJumbotron = styled.div`
  .jumbo {
    background: #002B36 url(${quoteTash}) no-repeat center;
    background-size: contain;
    margin-bottom: 0px;
    margin-top: 56px;
    @media ${device.sizeInbetween} {
      height: 180px;
  }
    @media ${device.tablet} {
      height: 180px;
  }
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
`;

export const StylesNavigationBar = styled.div`
  .navbar {
    background-color: #fcfcff;
    border-bottom: 1px solid #002b36ff;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #212529;
    font-weight: bold;
    &:hover {
      color: #838383;
      text-decoration: none;
    }
    &.active {
      color: #212529;
    }
    &:focus {
      color: #212529;
    }
  }
  .dropdown-item.active, .dropdown-item:active {
    background-color: #fcfcff;
  }
`;

export const StylesInfographicsPodcastPosts = styled.div`
  button, .btn, .btn-link {
    color: #268bd2;
    text-align: left;
    &:hover {
      color: #838383;
      text-decoration: none;
    }
    &.active {
      color: #212529;
      text-decoration: none;
    }
    &:focus {
      color: #212529;
      text-decoration: none;
    }
  }
`;

export const StyledLink = styled.a`
  color: #268bd2;
  font-weight: bold;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

export const StyledLinkFooter = styled.a`
  margin: 0.5em;
`;

export const StyledLinkRouter = styled(Link)`
  color: #268bd2;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

export const StyledSplitButton = styled(SplitButton)`
  a.active.focus,
  a.active:focus,
  a.focus,
  a:active.focus,
  a:active:focus,
  a:focus,
  button.active.focus,
  button.active:focus,
  button.focus,
  button:active.focus,
  button:active:focus,
  button:focus,
  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
      outline: 0;
      outline-color: transparent;
      outline-width: 0;
      outline-style: none;
      box-shadow: 0 0 0 0 rgba(0,123,255,0);
  }
  a { 
    padding-top: 8px;
    padding-bottom: 8px;
    border-top-width: 0px;
    border-bottom-width: 0px;
  }
`;

export const StyledImage = styled.img`
  border-radius: 5px;
  margin-right: 5px;
  width: 1.5em; 
  height: 1.5em; 
`;

export const StyledImageAbout = styled.img`
  border-radius: 20px;
  height: 175px;
`;

export const StyledImageHome = styled.img`
  border-radius: 100px;
  box-shadow: 0 4px 28px 0 #212529, 0 6px 20px 0 #000000;
  height: 100px;
  &:hover {
    box-shadow: 0 4px 48px 0 #212529, 0 6px 20px 0 #000000;
    }
`;

export const StyledImgInfographics = styled.img`
  max-width: 100%;
`;

export const YellowBrownTag = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

export const MarginH1 = styled.h1`
  margin: 2rem 0.5rem;
`;

export const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

export const QuotePhrase = styled.h2`
  margin: 2rem 0.5rem;
  font-style: italic;
`;

export const H2Title = styled.h2`
  margin: 2rem 0.5rem;
  font-weight: bold;
`;

export const SecondH2Title = styled.h2`
  margin: 2rem 0rem;
  font-weight: bold;
  @media ${device.sizeInbetween} {
    height: 1.75em;
  }
`;

export const SubTitleLinks = styled.h2`
  font-weight: bold;
`;

export const PhotoBox = styled.div`
  margin: 2rem 0.5rem 0rem;
  display: flex;
  justify-content: center;
`;

export const StyledPhotoInfo = styled.p`
  font-size: 0.7rem;
  text-align: center;
  margin: 0rem 0.5rem 2rem;
`;

export const SkillsText = styled.p`
  text-align: justify;
  margin: 2rem 0rem;
`;

export const MarginTBLabel = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const MarginTB = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #b58900;
  border: 2px solid #b58900;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #b58900;
    color: white;
  }
`;

export const StyledLi = styled.li`
  margin: 0.5rem 2rem;
  list-style-type: circle;
`;

export const SkillsDiv = styled.div`
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

export const DividedSkillsDiv = styled.div`
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

export const MediaQueriesBox = styled.div`
  @media ${device.sizeInbetween} {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

export const LeftPart = styled.div`
  @media ${device.sizeInbetween} {
    width: 66%;
    margin-right: 2rem;
  }
`;

export const LeftBox = styled.div`
  @media ${device.sizeInbetween} {
    width: 66%;
  }
`;

export const RightPart = styled.div`
  @media ${device.sizeInbetween} {
    width: 33%;
    margin-left: 2rem;
  }
`;

export const Loop = styled.div`
  color: #212529;
  margin-top: 3em;
  margin-bottom: 2em;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  margin: 2rem 1rem;
  padding: 1.5rem;
  text-align: center;
  background: #268bd280;
`;

export const LeftIntro = styled.div`
  margin: 2rem 1rem;
`;

export const PhotoIcon = styled.div`
  margin: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

export const LinksWithMedia = styled.div`
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