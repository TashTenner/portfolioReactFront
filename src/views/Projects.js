import React, { Component } from 'react';
import { Link } from "react-router-dom";
import projectService from "../services/projectService";
import styled from 'styled-components';
import { device } from '../services/device';

const ProjectsBox = styled.div`
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

const TitleProjects = styled.h1`
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

const SubTitleLinks = styled.h2`
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

class Projects extends Component {
  state = {
    projects: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const projects = await projectService.getAllProjects()
      this.setState({
        projects,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { projects, loading } = this.state;
    return (

      <ProjectsBox>
        <LeftBox>
          <TitleProjects>Web Development</TitleProjects>
          <SubTitle>Certificate:</SubTitle>
          <ul>
            <StyledLi>Ironhack - Web Development Barcelona, May 2019 - December 2019, Part Time: <a href="https://www.credential.net/1d259fcf-950b-499e-84ea-3c93b2d5a301" target="_blank" rel="noopener noreferrer">Graduation Certificate</a></StyledLi>
          </ul>
          <SubTitle>What motivates me to code:</SubTitle>
          <ul>
            <StyledLi>Coding solves real world issues and empoweres us to communicate, order items, accept payments, connect, share & collaborate.</StyledLi>
            <StyledLi>Programming gives me a sense of control, as I am in charge of solving the puzzle.</StyledLi>
            <StyledLi>I can see myself improving and enjoy lifelong learning for personal and professional reasons.</StyledLi>
            <StyledLi>I can observe how the programming world and coding languages change over time.</StyledLi>
          </ul>
        </LeftBox>
        <Links>
          <SubTitleLinks>Projects:</SubTitleLinks>
          <div>
            <ul>
              {!loading && projects.map((project) => {
                return (
                  project ?
                    <MarginTB key={project._id}>
                      <StyledLink to={`/projects/${project.titleURL}`}>{project.title}</StyledLink>
                    </MarginTB>
                    : <div key={project._id}></div>
                )
              })}
              {loading && <div>loading...</div>}
            </ul>
          </div>
        </Links>
      </ProjectsBox>
    );
  }
}

export default Projects;


