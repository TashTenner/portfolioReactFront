import React, { Component } from 'react';
import styled from 'styled-components';
import { navigateTo } from "gatsby-link";
// import axios from "axios";

function encode(data) {
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
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };


  // state = {
  //   name: '',
  //   message: '',
  //   email: '',
  //   sent: false,
  //   buttonText: 'Send Message'
  // }

  // formSubmit = (e) => {
  //   e.preventDefault()

  //   this.setState({
  //     buttonText: '...sending'
  //   })

  //   let data = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     message: this.state.message
  //   }

  //   axios.post('API_URI', data)
  //     .then(res => {
  //       this.setState({ sent: true }, this.resetForm())
  //     })
  //     .catch(() => {
  //       console.log('Message not sent')
  //     })
  // }

  // resetForm = () => {
  //   this.setState({
  //     name: '',
  //     message: '',
  //     email: '',
  //     buttonText: 'Message Sent'
  //   })
  // }

  render() {
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
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:<br />
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:<br />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:<br />
                <textarea name="message" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </StyledDiv>



        {/* <StyledDiv>
          <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <div>
              <label class="message" htmlFor="message-input">Your Message</label>
              <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </div>

            <div>
              <label class="message-name" htmlFor="message-name">Your Name</label>
              <input onChange={e => this.setState({ name: e.target.value })} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name} />
            </div>

            <div>
              <label class="message-email" htmlFor="message-email">Your Email</label>
              <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
            </div>

            <div className="button--container">
              <button type="submit" className="button button-primary">{this.state.buttonText}</button>
            </div>
          </form>


          <form className="contact-form" method="POST" action="/contact">
            <div className="form-field">
              <label htmlFor="name">
                <div className="label-content">Name:</div>
                <input type="text" name="name" required />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="email">
                <div className="label-content">Email:</div>
                <input type="email" name="email" required />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                <div className="label-content">Message:</div>
                <textarea className="stretch" name="message" rows="5" required />
              </label>
            </div>

            <button type="submit">Send</button>

            <div>
              {window.location.hash === '#success' &&
                <div id="success">
                  <p>Your message has been sent!</p>
                </div>
              }
              {window.location.hash === '#error' &&
                <div id="error">
                  <p>An error occured while submitting the form.</p>
                </div>
              }
            </div>
          </form>
        </StyledDiv> */}
      </ContactBox>
    );
  }
}

export default Contact;