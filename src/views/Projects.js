import React, { Component } from 'react';
import projectService from "../services/projectService";
import { MarginH1, StyledLinkRouter, H2Title, SubTitleLinks, MediaQueriesBox, LeftBox, StyledLi, MarginTB, LinksWithMedia, StyledLink } from "../views/Styles";

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
      <MediaQueriesBox>
        <LeftBox>
          <MarginH1>Web Development</MarginH1>
          <H2Title>Certificate:</H2Title>
          <ul>
            <StyledLi>Ironhack - Web Development Barcelona, May 2019 - December 2019, Part Time: <StyledLink href="https://www.credential.net/1d259fcf-950b-499e-84ea-3c93b2d5a301" target="_blank" rel="noopener noreferrer">Graduation Certificate</StyledLink></StyledLi>
          </ul>
          <H2Title>What motivates me to code:</H2Title>
          <ul>
            <StyledLi>Coding solves real world issues and empoweres us to communicate, order items, accept payments, connect, share & collaborate.</StyledLi>
            <StyledLi>Programming gives me a sense of control, as I am in charge of solving the puzzle.</StyledLi>
            <StyledLi>I can see myself improving and enjoy lifelong learning for personal and professional reasons.</StyledLi>
            <StyledLi>I can observe how the programming world and coding languages change over time.</StyledLi>
          </ul>
        </LeftBox>
        <LinksWithMedia>
          <SubTitleLinks>Projects:</SubTitleLinks>
          <div>
            <ul>
              {!loading && projects.map((project) => {
                return (
                  project ?
                    <MarginTB key={project._id}>
                      <StyledLinkRouter to={`/projects/${project.titleURL}`}>{project.title}</StyledLinkRouter>
                    </MarginTB>
                    : <div key={project._id}></div>
                )
              })}
              {loading && <div>loading...</div>}
            </ul>
          </div>
        </LinksWithMedia>
      </MediaQueriesBox>
    );
  }
}

export default Projects;


