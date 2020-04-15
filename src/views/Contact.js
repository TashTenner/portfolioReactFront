import React, { Component } from 'react';
import { StyledLink, MarginH1, StyledDiv, MediaQueriesBox, LeftPart, RightPart, MarginTBLabel, Button } from "../views/Styles"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state
    return (
      <MediaQueriesBox>
        <LeftPart>
          <MarginH1>Contact</MarginH1>
          <StyledDiv>Feel free to send me an <StyledLink href="mailto:mail@tash-tenner.com?subject=Hi" title="Mail" rel="noopener noreferrer">email</StyledLink> or look me up on <StyledLink href="https://www.linkedin.com/in/tashtenner/" title="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</StyledLink> and <StyledLink href="https://github.com/TashTenner" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</StyledLink> or read my posts on <StyledLink href="https://medium.com/@tashtenner" title="Medium" target="_blank" rel="noopener noreferrer">Medium</StyledLink> or call me on (+34) 644.88.67.23. It's only a stone's throw from here. I am looking forward to hearing from you. <span role="img" aria-label="grinning">😀</span></StyledDiv>
        </LeftPart>
        <RightPart>
          <StyledDiv>
            <form onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <MarginTBLabel>
                  <p>Your Name:</p>
                  <input type="text" name="name" value={name} onChange={this.handleChange} />
                </MarginTBLabel>
              </div>
              <div>
                <MarginTBLabel>
                  <p>Your Email:</p>
                  <input type="email" name="email" value={email} onChange={this.handleChange} />
                </MarginTBLabel>
              </div>
              <div>
                <MarginTBLabel>
                  <p>Message:</p>
                  <textarea name="message" value={message} onChange={this.handleChange} />
                </MarginTBLabel>
              </div>
              <div>
                <Button type="submit">Send</Button>
              </div>
            </form>
          </StyledDiv>
        </RightPart>
      </MediaQueriesBox>
    );
  }
}

export default Contact;