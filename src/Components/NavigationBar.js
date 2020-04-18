import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { StylesNavigationBar, StyledSplitButton, StyledImage } from "../views/Styles"

export const NavigationBar = () => (
  <StylesNavigationBar>
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
            <Dropdown.Item eventKey={2.4} as={Link} to="/linguistics/phonology"><span role="img" aria-label="construction">🚧</span> Phonology</Dropdown.Item>
            <Dropdown.Item eventKey={2.5} as={Link} to="/linguistics/etymology"><span role="img" aria-label="construction">🚧</span> Etymology</Dropdown.Item>
            <Dropdown.Item eventKey={2.6} as={Link} to="/linguistics/lessons"><span role="img" aria-label="construction">🚧</span> Lessons</Dropdown.Item>
          </StyledSplitButton>
          <StyledSplitButton variant="default" eventKey={3} title="WebDev Projects" href="/projects">
            <Dropdown.Item eventKey={3.1} as={Link} to="/projects/fonetikas">Fonetikas</Dropdown.Item>
            <Dropdown.Item eventKey={3.2} as={Link} to="/projects/plantiful">Plantiful</Dropdown.Item>
            <Dropdown.Item eventKey={3.3} as={Link} to="/projects/bailo-app">bailo.app</Dropdown.Item>
            <Dropdown.Item eventKey={3.4} as={Link} to="/projects/react-3-hour-challenge">React-3-hour-challenge</Dropdown.Item>
            <Dropdown.Item eventKey={3.5} as={Link} to="/projects/portfolio">Portfolio</Dropdown.Item>
            <Dropdown.Item eventKey={3.6} as={Link} to="/projects/react-graphql"><span role="img" aria-label="construction">🚧</span> React & GraphQL</Dropdown.Item>
          </StyledSplitButton>
          <Nav.Link eventKey={4} as={Link} to="/notebook">Notebook</Nav.Link>
          <Nav.Link eventKey={5} as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StylesNavigationBar>
)