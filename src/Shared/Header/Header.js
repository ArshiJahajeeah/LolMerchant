import { React, useState } from "react";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";

import "./Header.scss";
import logo from "./logo.png";

const Header = () => {
  const [showGames, setShowGames] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Image src={logo} width="100" />
        <Navbar.Brand>LoLMerchant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              onMouseLeave={() => setShowGames(false)}
              onMouseOver={() => setShowGames(true)}
              title="Games"
              id="collasible-nav-dropdown"
              show={showGames}
            >
              <NavDropdown.Item>League of Legends</NavDropdown.Item>
              <NavDropdown.Item>Valorant</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Prices</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Button className="btnPrimary">LOGIN</Button>
            <NavDropdown
              onMouseLeave={() => setShowLanguage(false)}
              onMouseOver={() => setShowLanguage(true)}
              title="Language"
              id="collasible-nav-dropdown"
              show={showLanguage}
            >
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>French</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
