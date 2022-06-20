import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Warehouse Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
