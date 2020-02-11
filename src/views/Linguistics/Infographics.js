import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PostCard from "../Components/PostCard";
import postService from "../../services/postService";

class Infographics extends Component {
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
        Infographics
        <div>DID YOU KNOW THAT ...? ... the word "talent" was used as a unit to measure? These quotes and linguistic infographics reflect the observations I made in the areas of linguistics, philosophy, psychology, evolution, culture, religion and other interdisciplinary areas.</div>
        <div>SABÍAS QUE ...? ... la palabra "talento" era una unidad de medida? Estas citas e infografías lingüísticas reflejan las observaciones que hice en las áreas de la lingüística, filosofía, psicología, evolución, cultura, religión y otras áreas interdisciplinarias.</div>
        <div>Infografía en español</div>
        <div>
          <ul>
            {!loading && posts.map((post) => {
              return (
                post && (post.category.__cdata === "Infografía en español") ?
                  <div key={post._id}>
                    <Link to={`/posts/${post._id}`}>{post.title}</Link>
                  </div>
                  : <div></div>
              )
            }
            )}
            {loading && <div>loading...</div>}
          </ul>
        </div>
        <div>Infographic in English</div>
        <div>
          <ul>
            {!loading && posts.map((post) => {
              return (
                post && (post.category.__cdata === "Infographic in English") ?
                  <div key={post._id}>
                    <Link to={`/posts/${post._id}`}>{post.title}</Link>
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

export default Infographics;