import React from 'react';
// import styled from 'styled-components';

const ProjectCard = props => {
  const {
    project: {
      title,
      description,
      technologies,
      codeFront,
      codeBack,
      presentationLink,
      demo
    }
  } = props;

  return (
    <div>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>technologies: {technologies}</p>
      <p>codeFront: {codeFront}</p>
      <p>codeBack: {codeBack}</p>
      <p>presentationLink: {presentationLink}</p>
      <p>demo: {demo}</p>
    </div>
  );
};

export default ProjectCard;