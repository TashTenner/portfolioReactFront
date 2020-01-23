import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">Tash Tenner</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link eventKey="1" as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/linguistics">Linguistics</Nav.Link>
          <Nav.Link eventKey="3" as={Link} to="/about">About me</Nav.Link>
          <Nav.Link eventKey="4" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)