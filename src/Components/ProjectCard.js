import React from 'react';
import { MarginH1, StyledLi, StyledLink } from "../views/Styles";

const ProjectCard = props => {
  const {
    project: {
      title,
      description,
      technologies,
      additional,
      codeFront,
      codeBack,
      presentation,
      demo
    }
  } = props;

  return (
    <>
      <MarginH1>{title}</MarginH1>
      <ul>
        <StyledLi>Description: {description}</StyledLi>
        <StyledLi>Technologies - Main: {technologies}</StyledLi>
        <StyledLi>Additional: {additional}</StyledLi>
        <StyledLi><StyledLink href={codeFront} target="_blank" rel="noopener noreferrer">Code - front</StyledLink></StyledLi>
        <StyledLi><StyledLink href={codeBack} target="_blank" rel="noopener noreferrer">Code - back</StyledLink></StyledLi>
        <StyledLi><StyledLink href={presentation} target="_blank" rel="noopener noreferrer">Presentation - Slides</StyledLink></StyledLi>
        <StyledLi><StyledLink href={demo} target="_blank" rel="noopener noreferrer">Demo</StyledLink></StyledLi>
      </ul>
    </>
  );
};

export default ProjectCard;