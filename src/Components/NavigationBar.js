import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #2BAE66FF;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #FCF6F5FF;
    &:hover {
      color: #D3D3D3;
      text-decoration: none;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">Tash Tenner</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link eventKey="1" as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/about">About me</Nav.Link>
          <Nav.Link eventKey="3" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)