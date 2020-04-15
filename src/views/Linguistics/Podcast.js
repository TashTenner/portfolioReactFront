import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import postService from "../../services/postService";
import { StylesInfographicsPodcastPosts, MarginH1, StyledDiv } from "../Styles"

class Podcast extends Component {
  state = {
    posts: [],
    loading: true,
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
      <StylesInfographicsPodcastPosts>
        <MarginH1>Podcast</MarginH1>
        <StyledDiv>The intention of this podcast is to dive into the world of languages - for Spanish speakers. There are 100 episodes in Spanish that you can listen to either on <a href="https://www.youtube.com/playlist?list=PL0DgSpA03NEiZqiCZQFvo3hEWG6YHYN27" target="_blank" rel="noopener noreferrer">YouTube</a> or <a href="https://www.ivoox.com/podcast-fonetikas_sq_f1363462_3.html" target="_blank" rel="noopener noreferrer">Ivoox</a>. Let's hope the following 100 episodes will be in English. <span role="img" aria-label="smiley">😃</span></StyledDiv>
        <StyledDiv><span role="img" aria-label="es">🇪🇸</span> ¿Tienes​ ​el​ ​cinturón​ ​de​ ​seguridad​ ​abrochado?​ Que​ ​estamos​ ​a​ ​punto​ ​de​ ​entrar a​ ​las​ profundidades​ ​de​ ​los idiomas.​ Nuestro​ ​objetivo​ ​común:​ Descubrir los idiomas que hay en ti. ¡Suscríbete en iVoox | iTunes | YouTube | TuneIn!</StyledDiv>
        <StyledDiv>
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
                              <a href={post.linkYT} target="_blank" rel="noopener noreferrer">YouTube Link</a>
                              <div>{post.pubDate.substring(0, 16)}</div>
                              <div>Bullet points: {post.encoded[0].__cdata}</div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                    : <div key={post._id}></div>
                )
              }
              )}
            {loading && <div>loading...</div>}
          </ul>
        </StyledDiv>
      </StylesInfographicsPodcastPosts>
    );
  }
}

export default Podcast;