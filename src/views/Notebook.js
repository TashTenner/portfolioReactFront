import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import noteService from "../services/noteService";
import { StylesInfographicsPodcastPosts, MarginH1, StyledDiv, StyledP } from "./Styles";

class Posts extends Component {
  state = {
    notes: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const notes = await noteService.getAllNotes()
      this.setState({
        notes,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { notes, loading } = this.state;
    return (
      <StylesInfographicsPodcastPosts>
        <MarginH1>Notes</MarginH1>
        <StyledDiv>Finally I have created a developer-notebook (some would say "cheat sheet" <span role="img" aria-label="wink">😉</span> ) for you and me with all those tiny bits and pieces you stumbled over and might want to remember. As I have just started jotting down some notes I will see in the future if adding a search bar will be useful. Happy reading! <span role="img" aria-label="smiley">😃</span></StyledDiv>
        <StyledDiv>
          <ul>
            {!loading && notes
              .map((note) => {
                return (
                  <div key={note._id}>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">{note.title}</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <StyledP>{note.text}</StyledP>
                            <StyledP>Date added: {(new Date(note.date).toLocaleString()).substring(0, 10)}</StyledP>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
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

export default Posts;
