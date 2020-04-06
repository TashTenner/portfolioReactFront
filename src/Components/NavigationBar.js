import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, SplitButton, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Styles = styled.div`
  .navbar {
    background-color: #fcfcff;
    border-bottom: 1px solid #002b36ff;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #212529;
    font-weight: bold;
    &:hover {
      color: #838383;
      text-decoration: none;
    }
    &.active {
      color: #212529;
    }
    &:focus {
      color: #212529;
    }
  }
  .dropdown-item.active, .dropdown-item:active {
    background-color: #fcfcff;
  }
`;

const StyledSplitButton = styled(SplitButton)`
  a.active.focus,
  a.active:focus,
  a.focus,
  a:active.focus,
  a:active:focus,
  a:focus,
  button.active.focus,
  button.active:focus,
  button.focus,
  button:active.focus,
  button:active:focus,
  button:focus,
  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
      outline: 0;
      outline-color: transparent;
      outline-width: 0;
      outline-style: none;
      box-shadow: 0 0 0 0 rgba(0,123,255,0);
  }
  a { 
    padding-top: 8px;
    padding-bottom: 8px;
    border-top-width: 0px;
    border-bottom-width: 0px;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px;
  margin-right: 5px;
  width: 1.5em; 
  height: 1.5em; 
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        <StyledImage src={logo} alt="logo" className="d-inline-block align-top" />
        Tash Tenner
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link eventKey={1} as={Link} to="/about">About me</Nav.Link>
          <StyledSplitButton variant="default" eventKey={2} title="Linguistics" href="/linguistics">
            <Dropdown.Item eventKey={2.1} as={Link} to="/linguistics/posts">Posts</Dropdown.Item>
            <Dropdown.Item eventKey={2.2} as={Link} to="/linguistics/podcast">Podcast</Dropdown.Item>
            <Dropdown.Item eventKey={2.3} as={Link} to="/linguistics/infographics">Infographics</Dropdown.Item>
            <Dropdown.Item eventKey={2.4} as={Link} to="/linguistics/phonology">Phonology</Dropdown.Item>
            <Dropdown.Item eventKey={2.5} as={Link} to="/linguistics/etymology">Etymology</Dropdown.Item>
            <Dropdown.Item eventKey={2.6} as={Link} to="/linguistics/lessons">Lessons</Dropdown.Item>
          </StyledSplitButton>
          <StyledSplitButton variant="default" eventKey={3} title="WebDev Projects" href="/projects">
            <Dropdown.Item eventKey={3.1} as={Link} to="/projects/fonetikas">Fonetikas</Dropdown.Item>
            <Dropdown.Item eventKey={3.2} as={Link} to="/projects/plantiful">Plantiful</Dropdown.Item>
            <Dropdown.Item eventKey={3.3} as={Link} to="/projects/bailo-app">bailo.app</Dropdown.Item>
            <Dropdown.Item eventKey={3.4} as={Link} to="/projects/react-3-hour-challenge">React-3-hour-challenge</Dropdown.Item>
            <Dropdown.Item eventKey={3.5} as={Link} to="/projects/portfolio">Portfolio</Dropdown.Item>
          </StyledSplitButton>
          <Nav.Link eventKey={4} as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)