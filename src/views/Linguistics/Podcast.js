import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import postService from "../../services/postService";
import YouTube from "react-youtube";

class Podcast extends Component {
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
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <div>
        Podcast
        <div>¿Tienes​ ​el​ ​cinturón​ ​de​ ​seguridad​ ​abrochado?​ Que​ ​estamos​ ​a​ ​punto​ ​de​ ​entrar a​ ​las​ profundidades​ ​de​ ​los idiomas.​ Nuestro​ ​objetivo​ ​común:​ Descubrir los idiomas que hay en ti. ¡Suscríbete! iVoox | iTunes | YouTube | TuneIn</div>
        <div>https://www.ivoox.com/podcast-fonetikas_sq_f1363462_3.html</div>
        <div>
          <ul>
            {!loading && posts
              .sort((a, b) =>
                (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) ? 1 :
                  (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) ? -1 : 0)
              .map((post) => {
                return (
                  post && (post.category.__cdata === "Podcast en español") ?
                    <div key={post._id}>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">{post.title}</Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div>
                                <YouTube videoId={post.linkYT.substring(32, 43)} opts={opts} />
                              </div>
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

export default Podcast;