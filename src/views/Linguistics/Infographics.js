import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
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
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <div>Infografías en español</div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Accordion>
                  <div>
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
                                        <img
                                          src={post.linkPic}
                                          alt="new"
                                        />
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
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <div>Infographics in English</div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body><Accordion>
                <div>
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
                                      <img
                                        src={post.linkPic}
                                        alt="new"
                                      />
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
              </Accordion></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Infographics;