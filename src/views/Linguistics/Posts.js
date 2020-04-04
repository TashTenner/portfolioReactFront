import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
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
        <div>The purpose of this blog is to help all those who want to improve their knowledge about learning a foreign language and those who want to know more about the links between languages, culture and science, only to name a few areas that will be covered.</div>
        <div>El objetivo del blog es ayudar a todos que quieran mejorar sus conocimientos en el aprendizaje de una lengua extranjera y que quieran saber más sobre las conexiones entre el idioma, la cultura y la ciencia, para nombrar unos ámbitos.</div>
        <div>
          <ul>
            {!loading && posts
              .sort((a, b) =>
                (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) ? 1 :
                  (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) ? -1 : 0)
              .map((post) => {
                return (
                  post && (post.category.__cdata === "Blog en español") ?
                    <div key={post._id}>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">{post.title}</Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div>{post.pubDate.substring(0, 16)}</div>
                              <div>{post.encoded[0].__cdata}</div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
