import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PostCard from "../Components/PostCard";
import postService from "../../services/postService";

class Posts extends Component {
  state = {
    posts: [],
    loading: true,
    // redirect: false
  };

  async componentDidMount() {
    try {
      const posts = await postService.getAllPosts()
      this.setState({
        posts,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div>
        Posts
        {/* <PostCard post={post} /> */}
        <div>The purpose of this blog is to help all those who want to improve their knowledge about learning a foreign language and those who want to know more about the links between languages, culture and science, only to name a few areas that will be covered.</div>
        <div>El objetivo del blog es ayudar a todos que quieran mejorar sus conocimientos en el aprendizaje de una lengua extranjera y que quieran saber más sobre las conexiones entre el idioma, la cultura y la ciencia, para nombrar unos ámbitos.</div>
        <div>
          <ul>
            {!loading && posts.map((post) => {
              return (
                post && (post.category.__cdata === "Blog en español") ?
                  <div key={post._id}>
                    <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    {/* <p>{post.title}</p> */}
                  </div>
                  : <div></div>
              )
            }
            )}
            {loading && <div>loading...</div>}
          </ul>
        </div>
      </div>
    );
  }
}

export default Posts;
