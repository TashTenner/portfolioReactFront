import React, { Component } from 'react';
import projectService from '../../services/projectService';
import ProjectCard from '../../Components/ProjectCard';

class Fonetikas extends Component {

  state = {
    project: {},
    loading: true,
  }

  async componentDidMount() {
    // const { match: { params: { id } } } = this.props;
    try {
      const project = await projectService.getProjectById("5e4301f11c9d4400000912da")
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

export default Fonetikas;