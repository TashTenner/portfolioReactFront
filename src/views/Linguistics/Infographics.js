import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import postService from "../../services/postService";
import { StylesInfographicsPodcastPosts, StyledImgInfographics, MarginH1, StyledDiv } from "../Styles"

class Infographics extends Component {
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
        <MarginH1>Infographics</MarginH1>
        <StyledDiv>Did you know the word "talent" was used as a unit to measure? These quotes and linguistic infographics reflect the observations I made in the areas of linguistics, philosophy, psychology, evolution, culture, religion and other interdisciplinary areas.</StyledDiv>
        <StyledDiv><span role="img" aria-label="es">🇪🇸</span> ¿Sabías que la palabra "talento" era una unidad de medida? Estas citas e infografías lingüísticas reflejan las observaciones que hice en las áreas de la lingüística, filosofía, psicología, evolución, cultura, religión y otras áreas interdisciplinarias.</StyledDiv>
        <StyledDiv>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">Infographics in English</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Accordion>
                    <StyledDiv>
                      <ul>
                        {!loading && posts
                          .sort((a, b) =>
                            (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) ? 1 :
                              (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) ? -1 : 0)
                          .map((post) => {
                            return (
                              post && (post.category.__cdata === "Infographic in English") ?
                                <div key={post._id}>
                                  <Accordion>
                                    <Card>
                                      <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">{post.title}</Accordion.Toggle>
                                      </Card.Header>
                                      <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                          <div>{post.pubDate.substring(0, 16)}</div>
                                          <a href={post.linkPic} target="_blank" rel="noopener noreferrer">
                                            <StyledImgInfographics src={post.linkPic} alt="infographic" />
                                          </a>
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
                  </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">Infografías en español</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body><Accordion>
                  <StyledDiv>
                    <ul>
                      {!loading && posts
                        .sort((a, b) =>
                          (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) ? 1 :
                            (parseInt(b.title.substring(0, b.title.indexOf(' ')).replace(/\D/g, ''))) > (parseInt(a.title.substring(0, a.title.indexOf(' ')).replace(/\D/g, ''))) ? -1 : 0)
                        .map((post) => {
                          return (
                            post && (post.category.__cdata === "Infografía en español") ?
                              <div key={post._id}>
                                <Accordion>
                                  <Card>
                                    <Card.Header>
                                      <Accordion.Toggle as={Button} variant="link" eventKey="0">{post.title}</Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                      <Card.Body>
                                        <div>{post.pubDate.substring(0, 16)}</div>
                                        <a href={post.linkPic} target="_blank" rel="noopener noreferrer">
                                          <StyledImgInfographics src={post.linkPic} alt="infographic" />
                                        </a>
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
                </Accordion></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </StyledDiv>
      </StylesInfographicsPodcastPosts>
    );
  }
}

export default Infographics;