import axios from "axios";

class ProjectService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    });
  }

  getAllProjects() {
    return this.axios.get("/api/projects").then(({ data: projects }) => projects);
  }

  getProjectById(id) {
    return this.axios.get(`/api/projects/${id}`).then(({ data: projects }) => projects);
  }
}

const projectService = new ProjectService();

export default projectService;
