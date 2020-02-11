import axios from "axios";

class PostService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    });
  }

  getAllPosts() {
    return this.axios.get("/api/posts").then(({ data: posts }) => posts);
  }

  getPostById(id) {
    return this.axios.get(`/api/posts/${id}`).then(({ data: post }) => post);
  }
}

const postService = new PostService();

export default postService;
