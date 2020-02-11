import React, { Component } from 'react';
import projectService from '../../services/projectService';
import ProjectCard from '../../Components/ProjectCard';

class Plantiful extends Component {

  state = {
    project: {},
    loading: true,
  }

  async componentDidMount() {
    try {
      const project = await projectService.getProjectById("5e4301f11c9d4400000912db")
      this.setState({
        project,
        loading: false,
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { project, loading } = this.state;
    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && <ProjectCard project={project} />}
      </>
    );
  }
}

export default Plantiful;