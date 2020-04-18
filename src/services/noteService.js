import axios from "axios";

class NoteService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    });
  }

  getAllNotes() {
    return this.axios.get("/api/notes").then(({ data: notes }) => notes);
  }

  getNoteById(id) {
    return this.axios.get(`/api/notes/${id}`).then(({ data: note }) => note);
  }
}

const noteService = new NoteService();

export default noteService;
