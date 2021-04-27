import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderBar({ showChar, showItem, showCampaign }) {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand style={{ color: "white" }}> Cursed City</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={showChar}>
            Character
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={showItem} disabled>
            Item
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} onClick={showCampaign} disabled>
            Campaign
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
export default HeaderBar;
