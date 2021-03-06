import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React from "react";

function Sentier({ name, text }) {
  return (
    <Row>
      <Container
        style={{
          backgroundColor: "#cac5d4",
          borderRadius: "15px",
          boxShadow: "0 0 3pt 2pt black",
          marginTop: "10px",
        }}
      >
        <h4>SENTIER DE LA GLOIRE</h4>
        <div>
          <b>{name}</b>: {text}
        </div>
      </Container>
    </Row>
  );
}
export default Sentier;
