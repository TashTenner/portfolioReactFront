import React, { Component } from 'react';
import styled from 'styled-components';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactBox = styled.div`
  .yellow-brown {
    color: #b58900;
    font-weight: bold;
  }
`;

const TitleContact = styled.h1`
  margin: 2rem 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 2rem 0.5rem;
  text-align: justify;
`;

const SubTitle = styled.h2`
  margin: 2rem 0.5rem;
  font-weight: bold;
`;

const StyledLink = styled.a`
  margin: 0.5em;
  color: #268bd2;
  font-weight: bold;
  text-decoration: underline;
    &:hover {
      color: #838383;
    }
`;

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

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
      <ContactBox>
        <TitleContact>Contact</TitleContact>
        <StyledDiv>Feel free to send me an
        <StyledLink href="mailto:mail@tash-tenner.com?subject=Hi" title="Mail" rel="noopener noreferrer">email</StyledLink>
        or look me up on
        <StyledLink href="https://www.linkedin.com/in/tashtenner/" title="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</StyledLink>
        and
        <StyledLink href="https://github.com/TashTenner" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</StyledLink>
        or read my posts on
        <StyledLink href="https://medium.com/@tashtenner" title="Medium" target="_blank" rel="noopener noreferrer">Medium</StyledLink>
        or call me on (+34) 644.88.67.23. It's only a stone's throw from here. I am looking forward to hearing from you. <span role="img" aria-label="grinning">😀</span></StyledDiv>
        <SubTitle>Contact me</SubTitle>
        <StyledDiv>

          <form onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>

        </StyledDiv>



      </ContactBox>
    );
  }
}

export default Contact;