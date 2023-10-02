import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import iconImage from "./../assets/images/Tyga-icon.jpg";

function PortfolioNav() {
  return (
    <Container>
      <NavbarBrand href='/home'>
        <img src={iconImage}></img>
      </NavbarBrand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About!</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default PortfolioNav;