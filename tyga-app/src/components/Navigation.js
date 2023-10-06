import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styles from './../Components/Navigation.module.css';
import iconImage from "./../assets/images/Tyga-icon.jpg";

function PortfolioNav() {
  return (
    <Container>
      <NavbarBrand href='#home' className='navbar navbar-expand-lg'>
        <img 
        src={iconImage}
        className='d-inline-block align-top' 
        alt="Tyga caricature icon"
        width="125"
        height="auto"
        />
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"><h4 className={styles.linkText}>Home</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      </NavbarBrand>
    </Container>
  );
};

export default PortfolioNav;