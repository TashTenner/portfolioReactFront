import React, { Component } from 'react';
import projectService from '../../services/projectService';
import ProjectCard from '../../Components/ProjectCard';

class ReactGraphQL extends Component {

  state = {
    project: {},
    loading: true,
  }

  async componentDidMount() {
    try {
      const project = await projectService.getProjectById("5e97286e1c9d440000b61810")
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

export default ReactGraphQL;