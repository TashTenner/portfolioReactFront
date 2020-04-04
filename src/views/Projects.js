import React, { Component } from 'react';
import { Link } from "react-router-dom";
import projectService from "../services/projectService";

class Projects extends Component {
  state = {
    projects: [],
    loading: true,
    // redirect: false
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
      <div>
        Projects
        {/* <ProjectCard project={project} /> */}
        <div>
          <ul>
            {!loading && projects.map((project) => {
              return (
                project ?
                  <div key={project._id}>
                    <Link to={`/projects/${project.titleURL}`}>{project.title}</Link>
                  </div>
                  : <div></div>
              )
            })}
            {loading && <div>loading...</div>}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
