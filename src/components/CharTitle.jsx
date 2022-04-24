import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import React from "react";

function Title({ name, keywords, exalted }) {
  return (
    <>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Card.Title>
          <h1>{name}</h1>
        </Card.Title>
      </Row>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Card.Subtitle style={{ color: "#878786" }}>
          {exalted && keywords + "Exalted"}
          {!exalted && keywords}
        </Card.Subtitle>
      </Row>
    </>
  );
}
export default Title;
